const express = require('express');
const router = express.Router();

const produtoRoutes = require('./produtoRoutes');
const usuarioRoutes = require('./usuarioRoutes');
// Associa o prefixo /produtos ao arquivo produtoRoutes
router.use('/produtos', produtoRoutes);
router.use('/usuario', usuarioRoutes);
// Associação com a rota /usuario
module.exports = router;