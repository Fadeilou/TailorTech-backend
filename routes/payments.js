const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Route pour créer un nouveau paiement
router.post('/', paymentController.createPayment);

// Route pour récupérer tous les paiements
router.get('/', paymentController.getAllPayments);

// Route pour récupérer un paiement spécifique par ID
router.get('/:paymentId', paymentController.getPaymentById);

// Route pour mettre à jour un paiement spécifique par ID
router.put('/:paymentId', paymentController.updatePayment);

// Route pour supprimer un paiement spécifique par ID
router.delete('/:paymentId', paymentController.deletePayment);

module.exports = router;
