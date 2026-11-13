const express = require('express');
const router = express.Router();
const usuarioController = require('../Controllers/usuarioController');

// Rota POST
// /products/novo
router.post('/novo', usuarioController.criarUsuario);


module.exports = router;