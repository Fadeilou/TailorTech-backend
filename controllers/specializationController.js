const { Specialization, User } = require('../models');

exports.createSpecialization = async (req, res) => {
  try {
    const specialization = await Specialization.create(req.body);
    res.status(201).send(specialization);
  } catch (error) {
    res.status(500).send({ message: 'Erreur lors de la création de la spécialisation.' });
  }
};

exports.getAllSpecializations = async (req, res) => {
  try {
    const specializations = await Specialization.findAll({ include: User });
    res.send(specializations);
  } catch (error) {
    res.status(500).send({ message: 'Erreur lors de la récupération des spécialisations.' });
  }
};

exports.getSpecializationById = async (req, res) => {
  try {
    const specialization = await Specialization.findByPk(req.params.specializationId, { include: User });
    if (!specialization) {
      return res.status(404).send({ message: 'Spécialisation non trouvée.' });
    }
    res.send(specialization);
  } catch (error) {
    res.status(500).send({ message: 'Erreur lors de la récupération de la spécialisation.' });
  }
};

exports.updateSpecialization = async (req, res) => {
  try {
    const specialization = await Specialization.findByPk(req.params.specializationId);
    if (!specialization) {
      return res.status(404).send({ message: 'Spécialisation non trouvée.' });
    }
    await specialization.update(req.body);
    res.send(specialization);
  } catch (error) {
    res.status(500).send({ message: 'Erreur lors de la mise à jour de la spécialisation.' });
  }
};

exports.deleteSpecialization = async (req, res) => {
  try {
    const specialization = await Specialization.findByPk(req.params.specializationId);
    if (!specialization) {
      return res.status(404).send({ message: 'Spécialisation non trouvée.' });
    }
    await specialization.destroy();
    res.send({ message: 'Spécialisation supprimée avec succès.' });
  } catch (error) {
    res.status(500).send({ message: 'Erreur lors de la suppression de la spécialisation.' });
  }
};
