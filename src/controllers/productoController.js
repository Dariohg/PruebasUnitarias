const { obtenerProductos, agregarProducto, eliminarProducto } = require('../services/productoService');

const listarProductos = (req, res) => {
    const productos = obtenerProductos();
    res.status(200).json(productos);
};

const crearProducto = (req, res) => {
    const { id, nombre, precio, categoriaId } = req.body;
    const nuevoProducto = agregarProducto({ id, nombre, precio, categoriaId });
    res.status(201).json(nuevoProducto);
};

const borrarProducto = (req, res) => {
    const { id } = req.params;
    eliminarProducto(id);
    res.status(204).send();
};

module.exports = {
    listarProductos,
    crearProducto,
    borrarProducto
};
