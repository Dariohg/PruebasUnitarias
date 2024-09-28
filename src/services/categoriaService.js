let categorias = [];

const obtenerCategorias = () => categorias;

const agregarCategoria = (categoria) => {
    categorias.push(categoria);
    return categoria;
};

const eliminarCategoria = (id) => {
    categorias = categorias.filter(cat => cat.id !== id);
};

module.exports = {
    obtenerCategorias,
    agregarCategoria,
    eliminarCategoria
};
