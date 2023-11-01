const express = require('express');
const router = express.Router();
const modelController = require('../controllers/modelController');
const upload = require('../middlewares/upload');

// Route pour créer un nouveau modèle avec une image
router.post('/create', upload.single('picture'), modelController.createModel);

// Route pour récupérer tous les modèles
router.get('/', modelController.getAllModels);

// Route pour récupérer un modèle spécifique par ID
router.get('/:modelId', modelController.getModelById);

// Route pour mettre à jour un modèle spécifique par ID
router.put('/:modelId', upload.single('picture'), modelController.updateModel);

// Route pour supprimer un modèle spécifique par ID
router.delete('/:modelId', modelController.deleteModel);

module.exports = router;
