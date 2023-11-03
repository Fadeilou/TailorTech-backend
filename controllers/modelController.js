
const { ClothingModel } = require('../models');
const { Op } = require('sequelize');
const upload = require('../middlewares/upload');

class ModelController {
  
  // Liste de tous les modèles
  async getAllModels(req, res) {

    try {
      const models = await ClothingModel.findAll();
      res.status(200).json(models);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving models', error: error.message });
    }
  }

  // Trouver un modèle spécifique par ID
  async getModelById(req, res) {
    const modelId = req.params.id;
    try {
      const model = await ClothingModel.findByPk(modelId);
      if (model) {
        res.status(200).json(model);
      } else {
        res.status(404).json({ message: 'Model not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving the model', error: error.message });
    }
  }

  // Ajouter un nouveau modèle
  async createModel(req, res) {
    try {
      // L'image est stockée par multer dans req.file
      const imagePath = req.file ? req.file.path : null;
      const modelData = {
        ...req.body,
        picture: imagePath
      };
  
      const newModel = await ClothingModel.create(modelData);
      res.status(201).json(newModel);
    } catch (error) {
      res.status(500).json({ message: 'Error creating the model', error: error.message });
    }
  }

  // Mettre à jour un modèle
  async updateModel(req, res) {
    const modelId = req.params.id;
    try {
      const model = await ClothingModel.findByPk(modelId);
      if (model) {
        const updatedModel = await ClothingModel.update(req.body);
        res.status(200).json(updatedModel);
      } else {
        res.status(404).json({ message: 'Model not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating the model', error: error.message });
    }
  }

  // Supprimer un modèle
  async deleteModel(req, res) {
    const modelId = req.params.id;
    try {
      const model = await ClothingModel.findByPk(modelId);
      if (model) {
        await ClothingModel.destroy();
        res.status(204).json({ message: 'Model deleted successfully' });
      } else {
        res.status(404).json({ message: 'Model not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting the model', error: error.message });
    }
  }

  // Rechercher des modèles par nom (ou autre attribut si nécessaire)
  async searchModels(req, res) {
    const query = req.query.q;
    try {
      const models = await ClothingModel.findAll({
        where: {
          name: {
            [Op.iLike]: '%' + query + '%'
          }
        }
      });
      res.status(200).json(models);
    } catch (error) {
      res.status(500).json({ message: 'Error searching models', error: error.message });
    }
  }

}

module.exports = new ModelController();
