# 🎓 Portfolio Starter - DSY1104# Getting Started with Create React App



Proyecto base para crear tu portfolio personal con **React + TypeScript + Bootstrap**.This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



## 📋 Requisitos Previos## Available Scripts



Antes de comenzar, asegúrate de tener instalado:In the project directory, you can run:



- **Node.js** (versión 18 o superior) - [Descargar](https://nodejs.org/)### `npm start`

- **npm** (viene incluido con Node.js)

- **Git** - [Descargar](https://git-scm.com/)Runs the app in the development mode.\

- **Editor de Código** (recomendado: VS Code) - [Descargar](https://code.visualstudio.com/)Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



### Verificar InstalaciónThe page will reload if you make edits.\

You will also see any lint errors in the console.

Abre una terminal y ejecuta:

### `npm test`

```bash

node --versionLaunches the test runner in the interactive watch mode.\

npm --versionSee the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

git --version

```### `npm run build`



## 🚀 InstalaciónBuilds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

### 1. Clonar el Repositorio

The build is minified and the filenames include the hashes.\

```bashYour app is ready to be deployed!

git clone [URL_DE_TU_REPOSITORIO]

cd portfolio-starterSee the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```

### `npm run eject`

### 2. Instalar Dependencias

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

```bash

npm installIf you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

```

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

Esto instalará:

- React 18You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

- TypeScript

- Bootstrap 5## Learn More

- React Bootstrap

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

### 3. Iniciar el Proyecto

To learn React, check out the [React documentation](https://reactjs.org/).

```bash
npm start
```

El proyecto se abrirá automáticamente en [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

```
portfolio-starter/
├── public/                    # Archivos públicos
├── src/
│   ├── components/           # Componentes React
│   │   ├── Hero.tsx         # Sección de bienvenida
│   │   ├── Projects.tsx     # Lista de proyectos
│   │   ├── ProjectCard.tsx  # Tarjeta individual
│   │   └── Footer.tsx       # Pie de página
│   ├── data/                # Datos en JSON
│   │   ├── profile.json     # Tus datos personales
│   │   └── projects.json    # Tus proyectos
│   ├── types/               # Definiciones TypeScript
│   │   ├── Profile.ts       # Interface Profile
│   │   └── Project.ts       # Interface Project
│   ├── styles/              # Estilos CSS
│   │   └── App.css          # Estilos globales
│   └── App.tsx              # Componente principal
├── package.json             # Dependencias del proyecto
└── README.md               # Este archivo
```

## ✏️ Personalizar el Portfolio

### 1. Modificar Datos Personales

Edita `src/data/profile.json`:

```json
{
  "nombre": "Tu Nombre Completo",
  "titulo": "Tu Profesión",
  "descripcion": "Tu descripción personal",
  "email": "tu@email.com",
  "github": "https://github.com/tu-usuario",
  "linkedin": "https://linkedin.com/in/tu-usuario"
}
```

### 2. Agregar Tus Proyectos

Edita `src/data/projects.json`:

```json
[
  {
    "id": 1,
    "titulo": "Nombre de tu proyecto",
    "descripcion": "Descripción breve",
    "imagen": "URL_de_la_imagen",
    "tecnologias": ["React", "TypeScript"],
    "repositorio": "https://github.com/tu-usuario/proyecto",
    "fecha": "2024-10-20"
  }
]
```

### 3. Cambiar Colores

Edita `src/styles/App.css` en la sección `:root`:

```css
:root {
  --color-primary: #2563eb;     /* Azul principal */
  --color-secondary: #7c3aed;   /* Púrpura */
  --color-dark: #1e293b;        /* Gris oscuro */
  --color-light: #f8fafc;       /* Gris claro */
}
```

## 🎨 Componentes Incluidos

### Hero
Sección de bienvenida con tu nombre, título y links a redes sociales.

### Projects
Muestra una grilla de tus proyectos usando cards de Bootstrap.

### ProjectCard
Tarjeta individual para cada proyecto con imagen, descripción y tecnologías.

### Footer
Pie de página con copyright.

## 📚 Tecnologías Utilizadas

- **React 18** - Librería de JavaScript para interfaces
- **TypeScript** - JavaScript con tipos
- **Bootstrap 5** - Framework CSS
- **React Bootstrap** - Componentes Bootstrap para React

## 🔧 Scripts Disponibles

```bash
npm start          # Inicia servidor de desarrollo
npm run build      # Crea versión de producción
npm test           # Ejecuta pruebas
npm run eject      # Expone configuración (no recomendado)
```

## 📖 Próximos Pasos

1. ✅ Personaliza `profile.json` con tus datos
2. ✅ Agrega tus proyectos a `projects.json`
3. ✅ Cambia los colores en `App.css`
4. 🔄 Agrega más componentes (Navbar, Contact, News)
5. 🔄 Implementa validación de formularios
6. 🔄 Agrega animaciones CSS
7. 🔄 Crea pruebas unitarias
8. 🔄 Despliega en GitHub Pages

## 🆘 Problemas Comunes

### Error: "npm no se reconoce como comando"
- Instala Node.js desde [nodejs.org](https://nodejs.org/)
- Reinicia tu terminal

### Error: "Puerto 3000 ya está en uso"
- Cierra otras aplicaciones React
- O cambia el puerto: `PORT=3001 npm start`

### Error de Importación JSON
- Verifica que el archivo JSON esté en `src/data/`
- Revisa que la sintaxis JSON sea válida

## 👨‍🏫 Recursos de Aprendizaje

- [Documentación de React](https://react.dev/)
- [Documentación de TypeScript](https://www.typescriptlang.org/)
- [Bootstrap Docs](https://getbootstrap.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)

## 📝 Notas del Profesor

Este proyecto base incluye:
- ✅ Configuración inicial de React + TypeScript
- ✅ Bootstrap instalado y configurado
- ✅ Estructura de carpetas organizada
- ✅ Componentes básicos funcionando
- ✅ Tipos TypeScript definidos
- ✅ Datos de ejemplo en JSON

A partir de aquí, los alumnos deben:
1. Personalizar los datos
2. Agregar nuevos componentes
3. Mejorar estilos
4. Implementar funcionalidades adicionales

## 🤝 Contribuir

Si encuentras errores o mejoras:
1. Haz un fork del repositorio
2. Crea una rama: `git checkout -b mejora-componente`
3. Commit: `git commit -m 'Descripción del cambio'`
4. Push: `git push origin mejora-componente`
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto para fines educativos.

---

<div align="center">

**Desarrollado para DSY1104 - Desarrollo Full Stack II**

**Duoc UC - 2025**

**Creado por: Profesor Sting Adams**

</div>
