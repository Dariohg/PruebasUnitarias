const {validarPrecio} = require('../src/validaciones');

describe('Pruebas para la función validarPrecio', () => {

    test('debe devolver true para precios válidos', () => {
        console.log('Iniciando prueba: validar precio válido');
        const precioValido = 100;
        const resultado = validarPrecio(precioValido);

        expect(resultado).toBe(true);
        console.log('Prueba completada: validar precio válido - ÉXITO');
    });

    test('debe devolver un error cuando el precio es menor o igual a 0', () => {
        console.log('Iniciando prueba: validar precio negativo o cero');
        const precioNegativo = -100;
        const resultado = validarPrecio(precioNegativo);

        expect(resultado).toBe('El precio debe ser mayor que cero');
        console.log('Prueba completada: validar precio negativo o cero - ÉXITO');
    });

    test('debe devolver un error cuando el precio es mayor que 10,000', () => {
        console.log('Iniciando prueba: validar precio mayor a 10,000');
        const precioMuyAlto = 15000;
        const resultado = validarPrecio(precioMuyAlto);

        expect(resultado).toBe('El precio no puede ser mayor que 10,000');
        console.log('Prueba completada: validar precio mayor a 10,000 - ÉXITO');
    });

    test('debe devolver un error cuando el precio no es un número', () => {
        console.log('Iniciando prueba: validar que el precio no sea un número');
        const precioNoNumerico = 'hola';
        const resultado = validarPrecio(precioNoNumerico);

        expect(resultado).toBe('El precio debe ser un número');
        console.log('Prueba completada: validar que el precio no sea un número - ÉXITO');
    });
    

});
