// funciones que vamos a usar para validar los datos de entrada
//const variableInutil = "hola";
// valdiar el dni
export function validarDni(dni: string): boolean {
    // Eliminar espacios y caracteres no numéricos
    const dniLimpio = dni.trim().replace(/[-.]/g, '');
    // Validar que el DNI tenga exactamente 8 dígitos con expresión regular
    const expresionDni = /^\d{8}$/;
    // Retornar true si el DNI es válido, false en caso contrario
    return expresionDni.test(dniLimpio);
}

//validar email
export function validarEmail(email: string): boolean {
    // Eliminar espacios al inicio y al final
    const emailLimpio = email.trim();
    // Validar el formato del correo electrónico con expresión regular
    const expresionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Retornar true si el correo electrónico es válido, false en caso contrario
    return expresionEmail.test(emailLimpio);
}

//validar contraseña
export function validarContrasena(contrasena: string): boolean {
    // Validar que la contraseña tenga al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número
    if (contrasena.length < 8) {
        return false;
    }
    const tieneNumero = /\d/.test(contrasena);
    if (!tieneNumero) {
        return false;
    }
    const tieneMinuscula = /[a-z]/.test(contrasena);
    if (!tieneMinuscula) {
        return false;
    }
    const tieneMAYUSCULA = /[A-Z]/.test(contrasena);
    if (!tieneMAYUSCULA) {
        return false;
    }
    // Si la contraseña cumple con todos los requisitos, retornar true
    return true;
}