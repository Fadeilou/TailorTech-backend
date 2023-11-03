const { Measurements, User } = require('../models');

exports.createMeasurement = async (req, res) => {
  try {
    const measurement = await Measurements.create(req.body);
    res.status(201).send(measurement);
  } catch (error) {
    res.status(500).send({ message: 'Erreur lors de la création de la mesure.' });
  }
};

exports.getAllMeasurements = async (req, res) => {
  try {
    const measurements = await Measurements.findAll({ include: [ { model: User, as: 'client' }, { model: User, as: 'agent' } ] });
    res.send(measurements);
  } catch (error) {
    res.status(500).send({ message: 'Erreur lors de la récupération des mesures.' });
  }
};

exports.getMeasurementById = async (req, res) => {
  try {
    const measurement = await Measurements.findByPk(req.params.measurementId, { include: [ { model: User, as: 'client' }, { model: User, as: 'agent' } ] });
    if (!measurement) {
      return res.status(404).send({ message: 'Mesure non trouvée.' });
    }
    res.send(measurement);
  } catch (error) {
    res.status(500).send({ message: 'Erreur lors de la récupération de la mesure.' });
  }
};

exports.updateMeasurement = async (req, res) => {
  try {
    const measurement = await Measurements.findByPk(req.params.measurementId);
    if (!measurement) {
      return res.status(404).send({ message: 'Mesure non trouvée.' });
    }
    await measurement.update(req.body);
    res.send(measurement);
  } catch (error) {
    res.status(500).send({ message: 'Erreur lors de la mise à jour de la mesure.' });
  }
};

exports.deleteMeasurement = async (req, res) => {
  try {
    const measurement = await Measurements.findByPk(req.params.measurementId);
    if (!measurement) {
      return res.status(404).send({ message: 'Mesure non trouvée.' });
    }
    await measurement.destroy();
    res.send({ message: 'Mesure supprimée avec succès.' });
  } catch (error) {
    res.status(500).send({ message: 'Erreur lors de la suppression de la mesure.' });
  }
};
