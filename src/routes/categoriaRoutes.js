const express = require('express');
const { listarCategorias, crearCategoria, borrarCategoria } = require('../controllers/categoriaController');

const router = express.Router();

router.get('/categorias', listarCategorias);
router.post('/categorias', crearCategoria);
router.delete('/categorias/:id', borrarCategoria);

module.exports = router;
