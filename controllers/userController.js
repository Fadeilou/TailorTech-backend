const { User } = require('../models');
const upload = require('../middlewares/upload');
const path = require('path');

const UserController = {
  
  // Récupérer tous les utilisateurs
    getAllUsers: async (req, res) => {

        try {
        const users = await User.findAll();
        res.status(200).json(users);
        } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des utilisateurs." });
        }
    },

  // Récupérer un utilisateur par ID
    getUserById: async (req, res) => {
        try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "Utilisateur non trouvé." });
        }
        } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération de l'utilisateur." });
        }
    },

  // Créer un nouvel utilisateur
    createUser: async (req, res) => {
        try {
        const user = await User.create(req.body);
        res.status(201).json(user);
        } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création de l'utilisateur." });
        }
    },

  // Mettre à jour un utilisateur
    updateUser: async (req, res) => {
        try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.update(req.body);
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "Utilisateur non trouvé." });
        }
        } catch (error) {
        res.status(500).json({ message: "Erreur lors de la mise à jour de l'utilisateur." });
        }
    },

  // Supprimer un utilisateur
    deleteUser: async (req, res) => {
        try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.destroy();
            res.status(200).json({ message: "Utilisateur supprimé avec succès." });
        } else {
            res.status(404).json({ message: "Utilisateur non trouvé." });
        }
        } catch (error) {
        res.status(500).json({ message: "Erreur lors de la suppression de l'utilisateur." });
        }
    },

  // Mettre à jour la photo de profil de l'utilisateur
    updateProfilePicture: async (req, res) => {
        try {
        if (!req.file) {
            return res.status(400).json({ message: "Veuillez télécharger une image." });
        }
    
        const user = await User.findByPk(req.params.id);
        if (user) {
            const imagePath = path.join('images', 'profiles', req.file.filename);
            await user.update({ profilePicture: imagePath });
            res.status(200).json({ message: "Photo de profil mise à jour avec succès.", imagePath });
        } else {
            res.status(404).json({ message: "Utilisateur non trouvé." });
        }
        } catch (error) {
        res.status(500).json({ message: "Erreur lors de la mise à jour de la photo de profil." });
        }
    }
};

module.exports = UserController;
