# tp-CI-CD

Proyecto de ejemplo para la materia de Ingenieria y Calidad de Software de la UTN. El objetivo es mostrar una base simple para practicar integracion continua con TypeScript y Jest.

## Estado actual

El repositorio tiene ahora:

- funciones de validacion en `src/validador.ts`
- pruebas unitarias en `src/validador.test.ts`
- configuracion de TypeScript en `tsconfig.json`
- configuracion de Jest y scripts de npm en `package.json`

## Que valida el proyecto

- `validarDni`: acepta DNI de 8 digitos y limpia puntos o guiones
- `validarEmail`: valida un formato basico de correo electronico
- `validarContrasena`: exige minimo 8 caracteres, una minuscula, una mayuscula y un numero

## Estructura

```text
tp-CI-CD/
├── package.json
├── tsconfig.json
├── README.md
└── src/
	├── validador.ts
	└── validador.test.ts
```

## Como ejecutar los tests

Instalar dependencias:

```powershell
npm install
```

Ejecutar los tests:

```powershell
npm test
```

Compilar el proyecto:

```powershell
npm run build
```

## Uso del trabajo en CI/CD

Este proyecto sirve como base para una pipeline de integracion continua porque permite:

- detectar cambios que rompen la logica de validacion
- ejecutar pruebas automaticas en cada commit o push
- demostrar feedback rapido antes de integrar cambios

## Proximos pasos

- agregar un workflow YAML para ejecutar `npm install` y `npm test`
- definir una estrategia de despliegue o una version de demostracion
