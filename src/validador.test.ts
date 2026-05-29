import { validarDni, validarContrasena, validarEmail } from './validador';

describe('Pruebas del Módulo de Validaciones', () => {

    // --- TESTS PARA EL DNI ---
    describe('Validación de DNI', () => {
        test('Camino feliz: DNI válido de 8 dígitos', () => {
            expect(validarDni('39123456')).toBe(true);
        });

        test('Camino feliz: DNI válido con puntos y guiones (debe limpiarlos)', () => {
            expect(validarDni('39.123-456')).toBe(true);
        });

        test('Camino triste: Falla si tiene letras', () => {
            expect(validarDni('39123a56')).toBe(false);
        });

        test('Camino triste: Falla si es demasiado corto', () => {
            expect(validarDni('12345')).toBe(false);
        });
    });

    // --- TESTS PARA LA CONTRASEÑA ---
    describe('Validación de Contraseña', () => {
        test('Camino feliz: Contraseña segura (larga, con número, minúscula y MAYÚSCULA)', () => {
            expect(validarContrasena('Chaco2026!')).toBe(true);
        });

        test('Camino triste: Falla si es menor a 8 caracteres', () => {
            expect(validarContrasena('Ab1!')).toBe(false);
        });

        test('Camino triste: Falla si no tiene números', () => {
            expect(validarContrasena('SoloLetras')).toBe(false);
        });

        test('Camino triste: Falla si no tiene mayúsculas', () => {
            expect(validarContrasena('minuscula123!')).toBe(false);
        });
    });

    // --- TESTS PARA EL EMAIL ---
    describe('Validación de Email', () => {
        test('Camino feliz: Email válido', () => {
            expect(validarEmail('user@example.com')).toBe(true);
        });
        test('Camino triste: Falla si no tiene @', () => {
            expect(validarEmail('userexample.com')).toBe(false);
        });
        test('Camino triste: Falla si no tiene dominio', () => {
            expect(validarEmail('user@')).toBe(false);
        });
        test ('Camino triste: Falla si no tiene punto en el dominio', () => {
            expect(validarEmail('user@examplecom')).toBe(false);
        });
    });   

});