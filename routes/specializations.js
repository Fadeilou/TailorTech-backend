const express = require('express');
const router = express.Router();
const specializationController = require('../controllers/specializationController');

// Route pour créer une nouvelle spécialisation
router.post('/', specializationController.createSpecialization);

// Route pour récupérer toutes les spécialisations
router.get('/', specializationController.getAllSpecializations);

// Route pour récupérer une spécialisation spécifique par ID
router.get('/:specializationId', specializationController.getSpecializationById);

// Route pour mettre à jour une spécialisation spécifique par ID
router.put('/:specializationId', specializationController.updateSpecialization);

// Route pour supprimer une spécialisation spécifique par ID
router.delete('/:specializationId', specializationController.deleteSpecialization);

module.exports = router;
