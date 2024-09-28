let productos = [];

const obtenerProductos = () => productos;

const agregarProducto = (producto) => {
    productos.push(producto);
    return producto;
};

const eliminarProducto = (id) => {
    productos = productos.filter(prod => prod.id !== id);
};

module.exports = {
    obtenerProductos,
    agregarProducto,
    eliminarProducto
};
