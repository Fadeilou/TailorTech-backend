const { Shipping } = require('../models');

exports.createShipping = async (req, res) => {
  try {
    const shipping = await Shipping.create(req.body);
    res.status(201).send(shipping);
  } catch (error) {
    res.status(500).send({ message: 'Erreur lors de la création de l\'expédition.' });
  }
};

exports.getAllShippings = async (req, res) => {
  try {
    const shippings = await Shipping.findAll();
    res.send(shippings);
  } catch (error) {
    res.status(500).send({ message: 'Erreur lors de la récupération des expéditions.' });
  }
};

exports.getShippingById = async (req, res) => {
  try {
    const shipping = await Shipping.findByPk(req.params.shippingId);
    if (!shipping) {
      return res.status(404).send({ message: 'Expédition non trouvée.' });
    }
    res.send(shipping);
  } catch (error) {
    res.status(500).send({ message: 'Erreur lors de la récupération de l\'expédition.' });
  }
};

exports.updateShipping = async (req, res) => {
  try {
    const shipping = await Shipping.findByPk(req.params.shippingId);
    if (!shipping) {
      return res.status(404).send({ message: 'Expédition non trouvée.' });
    }
    await shipping.update(req.body);
    res.send(shipping);
  } catch (error) {
    res.status(500).send({ message: 'Erreur lors de la mise à jour de l\'expédition.' });
  }
};

exports.deleteShipping = async (req, res) => {
  try {
    const shipping = await Shipping.findByPk(req.params.shippingId);
    if (!shipping) {
      return res.status(404).send({ message: 'Expédition non trouvée.' });
    }
    await shipping.destroy();
    res.send({ message: 'Expédition supprimée avec succès.' });
  } catch (error) {
    res.status(500).send({ message: 'Erreur lors de la suppression de l\'expédition.' });
  }
};
