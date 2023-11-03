const express = require('express');
const router = express.Router();
const shippingController = require('../controllers/shippingController');

// Route pour créer une nouvelle expédition
router.post('/', shippingController.createShipping);

// Route pour récupérer toutes les expéditions
router.get('/', shippingController.getAllShippings);

// Route pour récupérer une expédition spécifique par ID
router.get('/:shippingId', shippingController.getShippingById);

// Route pour mettre à jour une expédition spécifique par ID
router.put('/:shippingId', shippingController.updateShipping);

// Route pour supprimer une expédition spécifique par ID
router.delete('/:shippingId', shippingController.deleteShipping);

module.exports = router;
