const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];  // Format: Bearer TOKEN
        const decodedToken = jwt.verify(token, 'YOUR_SECRET_KEY');
        req.userData = { userId: decodedToken.userId }; 
        next();
    } catch (error) {
        res.status(401).json({ error: "Authentication failed" });
    }
};
