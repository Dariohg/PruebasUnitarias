// tests/productoController.test.js
const { listarProductos, crearProducto } = require('../src/controllers/productoController');
const productoService = require('../src/services/productoService');

jest.mock('../src/services/productoService');

describe('Producto Controller', () => {
    test('debe listar todos los productos', () => {
        console.log('Iniciando prueba: listar todos los productos');

        productoService.obtenerProductos.mockReturnValue([{ id: 1, nombre: 'Laptop', precio: 1200, categoriaId: 1 }]);

        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        listarProductos(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith([{ id: 1, nombre: 'Laptop', precio: 1200, categoriaId: 1 }]);

        console.log('Prueba completada: listar todos los productos - ÉXITO');
    });

    test('debe crear un nuevo producto', () => {
        console.log('Iniciando prueba: crear un nuevo producto');

        const nuevoProducto = { id: 2, nombre: 'Camiseta', precio: 20, categoriaId: 2 };
        productoService.agregarProducto.mockReturnValue(nuevoProducto);

        const req = { body: nuevoProducto };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        crearProducto(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(nuevoProducto);

        console.log('Prueba completada: crear un nuevo producto - ÉXITO');
    });
});
