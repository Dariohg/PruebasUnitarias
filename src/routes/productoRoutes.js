const express = require('express');
const { listarProductos, crearProducto, borrarProducto } = require('../controllers/productoController');

const router = express.Router();

router.get('/productos', listarProductos);
router.post('/productos', crearProducto);
router.delete('/productos/:id', borrarProducto);

module.exports = router;
