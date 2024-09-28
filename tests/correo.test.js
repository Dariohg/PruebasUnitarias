const { validarCorreo } = require('../src/validaciones');

describe('Pruebas unitarias para la función validarCorreo', () => {

    test('debe devolver true para un correo válido', () => {
        console.log('Iniciando prueba: correo válido');
        const correoValido = 'usuario@dominio.com';
        const resultado = validarCorreo(correoValido);

        expect(resultado).toBe(true);
        console.log('Prueba completada: correo válido - ÉXITO');
    });

    test('debe devolver un error si el correo no tiene "@"', () => {
        console.log('Iniciando prueba: correo sin @');
        const correoSinArroba = 'usuariodominio.com';
        const resultado = validarCorreo(correoSinArroba);

        expect(resultado).toBe('Correo inválido');
        console.log('Prueba completada: correo sin @ - ÉXITO');
    });

    test('debe devolver un error si el correo no tiene un dominio', () => {
        console.log('Iniciando prueba: correo sin dominio');
        const correoSinDominio = 'usuario@';
        const resultado = validarCorreo(correoSinDominio);

        expect(resultado).toBe('Correo inválido');
        console.log('Prueba completada: correo sin dominio - ÉXITO');
    });

    test('debe devolver un error si el correo contiene espacios', () => {
        console.log('Iniciando prueba: correo con espacios');
        const correoConEspacios = 'usuario @dominio.com';
        const resultado = validarCorreo(correoConEspacios);

        expect(resultado).toBe('Correo inválido');
        console.log('Prueba completada: correo con espacios - ÉXITO');
    });

    test('debe devolver un error si el correo no es una cadena', () => {
        console.log('Iniciando prueba: correo no es una cadena');
        const correoNoCadena = 12345;
        const resultado = validarCorreo(correoNoCadena);

        expect(resultado).toBe('El correo debe ser una cadena de texto');
        console.log('Prueba completada: correo no es una cadena - ÉXITO');
    });

    test.each([
        [null],
        [undefined],
        [{}],
        [[]]
    ])('debe devolver un error si el correo no es una cadena (%s)', (input) => {
        console.log(`Iniciando prueba: validar que el correo no sea una cadena (${input})`);
        const resultado = validarCorreo(input);

        expect(resultado).toBe('El correo debe ser una cadena de texto');
        console.log(`Prueba completada: validar que el correo no sea una cadena (${input}) - ÉXITO`);
    });
});
