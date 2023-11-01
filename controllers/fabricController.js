const Fabric = require('../models/fabric');
const { Op } = require('sequelize');
const upload = require('../middlewares/upload');

class FabricController {
  
  // Liste de tous les tissus
  async getAllFabrics(req, res) {
    try {
      const fabrics = await Fabric.findAll();
      res.status(200).json(fabrics);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving fabrics', error: error.message });
    }
  }

  // Trouver un tissu spécifique par ID
  async getFabricById(req, res) {
    const fabricId = req.params.id;
    try {
      const fabric = await Fabric.findByPk(fabricId);
      if (fabric) {
        res.status(200).json(fabric);
      } else {
        res.status(404).json({ message: 'Fabric not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving the fabric', error: error.message });
    }
  }

  // Ajouter un nouveau tissu
  async createFabric(req, res) {
    try {
      // L'image est stockée par multer dans req.file
      const imagePath = req.file ? req.file.path : null;
      const fabricData = {
        ...req.body,
        picture: imagePath
      };
  
      const newFabric = await Fabric.create(fabricData);
      res.status(201).json(newFabric);
    } catch (error) {
      res.status(500).json({ message: 'Error creating the fabric', error: error.message });
    }
  }

  // Mettre à jour un tissu
  async updateFabric(req, res) {
    const fabricId = req.params.id;
    try {
      const fabric = await Fabric.findByPk(fabricId);
      if (fabric) {
        const updatedFabric = await fabric.update(req.body);
        res.status(200).json(updatedFabric);
      } else {
        res.status(404).json({ message: 'Fabric not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating the fabric', error: error.message });
    }
  }

  // Supprimer un tissu
  async deleteFabric(req, res) {
    const fabricId = req.params.id;
    try {
      const fabric = await Fabric.findByPk(fabricId);
      if (fabric) {
        await fabric.destroy();
        res.status(204).json({ message: 'Fabric deleted successfully' });
      } else {
        res.status(404).json({ message: 'Fabric not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting the fabric', error: error.message });
    }
  }

  // Rechercher des tissus par nom (ou autre attribut si nécessaire)
  async searchFabrics(req, res) {
    const query = req.query.q;
    try {
      const fabrics = await Fabric.findAll({
        where: {
          name: {
            [Op.iLike]: '%' + query + '%'
          }
        }
      });
      res.status(200).json(fabrics);
    } catch (error) {
      res.status(500).json({ message: 'Error searching fabrics', error: error.message });
    }
  }

}

module.exports = new FabricController();
