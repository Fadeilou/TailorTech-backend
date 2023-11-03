const { Payment } = require('../models');

exports.createPayment = async (req, res) => {
  try {
    const payment = await Payment.create(req.body);
    res.status(201).send(payment);
  } catch (error) {
    res.status(500).send({ message: 'Erreur lors de la création du paiement.' });
  }
};

exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll();
    res.send(payments);
  } catch (error) {
    res.status(500).send({ message: 'Erreur lors de la récupération des paiements.' });
  }
};

exports.getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findByPk(req.params.paymentId);
    if (!payment) {
      return res.status(404).send({ message: 'Paiement non trouvé.' });
    }
    res.send(payment);
  } catch (error) {
    res.status(500).send({ message: 'Erreur lors de la récupération du paiement.' });
  }
};

exports.updatePayment = async (req, res) => {
  try {
    const payment = await Payment.findByPk(req.params.paymentId);
    if (!payment) {
      return res.status(404).send({ message: 'Paiement non trouvé.' });
    }
    await payment.update(req.body);
    res.send(payment);
  } catch (error) {
    res.status(500).send({ message: 'Erreur lors de la mise à jour du paiement.' });
  }
};

exports.deletePayment = async (req, res) => {
  try {
    const payment = await Payment.findByPk(req.params.paymentId);
    if (!payment) {
      return res.status(404).send({ message: 'Paiement non trouvé.' });
    }
    await payment.destroy();
    res.send({ message: 'Paiement supprimé avec succès.' });
  } catch (error) {
    res.status(500).send({ message: 'Erreur lors de la suppression du paiement.' });
  }
};
