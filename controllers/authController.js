const bcrypt = require('bcrypt');
const { User } = require('../models');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const mailService = require('../services/mailService');

// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_PASSWORD
//     }
// });

exports.register = async (req, res) => {
    try {
        const { email, password, firstname, lastname, phone, address, location, profileId } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ where: { email: email } });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }
        
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user
        const newUser = await User.create({ 
            email, 
            password: hashedPassword,
            firstname, 
            lastname, 
            phone,
            address, 
            location,
            profilePicture: 'images/profiles/profile-default.png',
            profileId 
        });

        // Generate a token
        const token = jwt.sign({ userId: newUser.id, email: newUser.email }, 'YOUR_SECRET_KEY', { expiresIn: '1h' }); // Replace 'YOUR_SECRET_KEY' with a strong secret key

        res.status(201).json({ message: 'User registered successfully', userId: newUser.id, token: token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ error: 'Authentication failed' });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ error: 'Authentication failed' });
        }

        const token = jwt.sign(
            { userId: user.id, email: user.email },
            'YOUR_SECRET_KEY',
            { expiresIn: '1h' }
        );

        res.status(200).json({ token: token, userId: user.id });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ error: 'Email not found' });
        }

        const resetToken = crypto.randomBytes(32).toString('hex');
        const hashedToken = await bcrypt.hash(resetToken, 10);
        
        user.resetToken = hashedToken;
        user.resetTokenExpiration = Date.now() + 3600000;  // 1 hour
        await user.save();

        mailService.sendMail(email, 'Password Reset Link', `Click on the link to reset your password: 
                                                            http://localhost:4200/reset-password/${resetToken}`);


        // transporter.sendMail({
        //     from: process.env.EMAIL,
        //     to: email,
        //     subject: 'Password Reset Link',
        //     text: `Click on the link to reset your password: 
        //            http://yourfrontendurl.com/reset-password/${resetToken}`
        // });

        res.status(200).json({ message: 'Reset link sent' });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.resetPassword = async (req, res) => {
    try {
        const { token, newPassword } = req.body;

        const user = await User.findOne({
            where: {
                resetToken: token,
                resetTokenExpiration: { $gt: Date.now() }
            }
        });

        if (!user) {
            return res.status(401).json({ error: 'Token is invalid or has expired' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.resetToken = null;
        user.resetTokenExpiration = null;
        await user.save();

        res.status(200).json({ message: 'Password updated successfully' });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
