const express = require('express');
const router = express.Router();
const fabricController = require('../controllers/fabricController');
const upload = require('../middlewares/upload');

// Route pour créer un nouveau tissu avec une image
router.post('/create', upload.single('picture'), fabricController.createFabric);

// Route pour récupérer tous les tissus
router.get('/', fabricController.getAllFabrics);

// Route pour récupérer un tissu spécifique par ID
router.get('/:fabricId', fabricController.getFabricById);

// Route pour mettre à jour un tissu spécifique par ID
router.put('/:fabricId', upload.single('picture'), fabricController.updateFabric);

// Route pour supprimer un tissu spécifique par ID
router.delete('/:fabricId', fabricController.deleteFabric);

module.exports = router;


