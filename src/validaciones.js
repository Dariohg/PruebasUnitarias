
function validarPrecio(precio) {
    if (typeof precio !== 'number') {
        return 'El precio debe ser un número';
    }
    if (precio <= 0) {
        return 'El precio debe ser mayor que cero';
    }
    if (precio > 10000) {
        return 'El precio no puede ser mayor que 10,000';
    }
    return true;
}

function validarCorreo(correo) {
    if (typeof correo !== 'string') {
        return 'El correo debe ser una cadena de texto';
    }
    // Expresión regular simple para validar correos electrónicos
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(correo)) {
        return 'Correo inválido';
    }
    return true;
}

module.exports = { validarPrecio, validarCorreo };
