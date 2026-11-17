const express = require('express');
const router = express.Router();
const produtoController = require('../Controllers/produtoController');

// Rota POST
// /products/novo
router.post('/novo', produtoController.criarProduto);


module.exports = router;
