// tests/categoriaController.test.js
const { listarCategorias, crearCategoria } = require('../src/controllers/categoriaController');
const categoriaService = require('../src/services/categoriaService');

jest.mock('../src/services/categoriaService');

describe('Categoria Controller', () => {
    test('debe listar todas las categorías', () => {
        console.log('Iniciando prueba: listar todas las categorías');

        categoriaService.obtenerCategorias.mockReturnValue([{ id: 1, nombre: 'Electrónica' }]);

        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        listarCategorias(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith([{ id: 1, nombre: 'Electrónica' }]);

        console.log('Prueba completada: listar todas las categorías - ÉXITO');
    });

    test('debe crear una nueva categoría', () => {
        console.log('Iniciando prueba: crear una nueva categoría');

        const nuevaCategoria = { id: 2, nombre: 'Ropa' };
        categoriaService.agregarCategoria.mockReturnValue(nuevaCategoria);

        const req = { body: nuevaCategoria };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        crearCategoria(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(nuevaCategoria);

        console.log('Prueba completada: crear una nueva categoría - ÉXITO');
    });
});
