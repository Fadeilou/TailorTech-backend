const express = require('express');
const router = express.Router();
const measurementsController = require('../controllers/measurementsController');

// Route pour créer une nouvelle mesure
router.post('/', measurementsController.createMeasurement);

// Route pour récupérer toutes les mesures
router.get('/', measurementsController.getAllMeasurements);

// Route pour récupérer une mesure spécifique par ID
router.get('/:measurementId', measurementsController.getMeasurementById);

// Route pour mettre à jour une mesure spécifique par ID
router.put('/:measurementId', measurementsController.updateMeasurement);

// Route pour supprimer une mesure spécifique par ID
router.delete('/:measurementId', measurementsController.deleteMeasurement);

module.exports = router;
