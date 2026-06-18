[![demo CI](https://github.com/Eze-Petra/tp-CI-CD/actions/workflows/node.js.yml/badge.svg)](https://github.com/Eze-Petra/tp-CI-CD/actions/workflows/node.js.yml)
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

## Requisitos

- Node.js >= 20
- npm (gestor de paquetes)

## Comandos útiles

- **Instalar dependencias (desarrollo):** `npm install`
- **Instalación reproducible (CI):** `npm ci --legacy-peer-deps`
- **Ejecutar tests:** `npm test`
- **Lint:** `npm run lint`
- **Bundle (esbuild):** `npm run bundle`
- **Compilar (tsc):** `npm run build`

## CI / Workflow

El repositorio ya incluye un workflow de GitHub Actions en `.github/workflows/node.js.yml` que ejecuta una pipeline con los siguientes pasos principales:

- `lint` (ejecuta `npm run lint`)
- `tests` (ejecuta `npm run test`)
- `bundle` (ejecuta `npm run bundle`)
- `build` (ejecuta `npm run build`)
- `deploy` (opcional con Vercel cuando se hace `push`)

El workflow utiliza Node 20 y en CI se ejecuta `npm ci --legacy-peer-deps` para instalaciones reproducibles. También incluye notificaciones a Discord y un paso de deploy a Vercel que requiere secrets.

Secrets/variables necesarias para el deploy:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
- `DISCORD_WEBHOOK` (para notificaciones)

Si no querés deployar desde CI, podés comentar o eliminar el job `deploy` en el workflow.

## Uso del trabajo en CI/CD

Este proyecto sirve como base para una pipeline de integracion continua porque permite:

- detectar cambios que rompen la logica de validacion
- ejecutar pruebas automaticas en cada commit o push
- demostrar feedback rapido antes de integrar cambios
 
### Workflow de GitHub Actions

Archivo: `.github/workflows/node.js.yml`

- Nombre: `demo CI`
- Disparadores: `push` y `pull_request` sobre la rama `main`
- Versión de Node: `20`
- Pasos principales:
	- `actions/checkout@v6`
	- `actions/setup-node@v6` (cache: npm)
	- `npm ci --legacy-peer-deps`
	- `npm run test`
	- `npm run build`

Esto significa que cada push a `main` (o PR hacia `main`) ejecutará las pruebas automáticamente y construirá el proyecto.
 
