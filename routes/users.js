const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const upload = require('../middlewares/upload');

// Route pour créer un nouvel utilisateur avec une photo de profil
router.post('/create', upload.single('profilePicture'), userController.createUser);

// Route pour récupérer tous les utilisateurs
router.get('/', userController.getAllUsers);

// Route pour récupérer un utilisateur spécifique par ID
router.get('/:userId', userController.getUserById);

// Route pour mettre à jour un utilisateur spécifique par ID
router.put('/:userId', upload.single('profilePicture'), userController.updateUser);

// Route pour mettre à jour la photo de profil d'un utilisateur spécifique par ID
router.put('/:userId/profile-picture', upload.single('profilePicture'), userController.updateProfilePicture);

// Route pour supprimer un utilisateur spécifique par ID
router.delete('/:userId', userController.deleteUser);

module.exports = router;
