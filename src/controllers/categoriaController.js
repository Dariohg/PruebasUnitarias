const { obtenerCategorias, agregarCategoria, eliminarCategoria } = require('../services/categoriaService');

const listarCategorias = (req, res) => {
    const categorias = obtenerCategorias();
    res.status(200).json(categorias);
};

const crearCategoria = (req, res) => {
    const { id, nombre } = req.body;
    const nuevaCategoria = agregarCategoria({ id, nombre });
    res.status(201).json(nuevaCategoria);
};

const borrarCategoria = (req, res) => {
    const { id } = req.params;
    eliminarCategoria(id);
    res.status(204).send();
};

module.exports = {
    listarCategorias,
    crearCategoria,
    borrarCategoria
};
