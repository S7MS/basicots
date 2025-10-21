# 📚 GUÍA COMPLETA DEL PROYECTO - Portfolio Starter

## 📖 Índice

1. [Introducción](#introducción)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Archivos de Configuración](#archivos-de-configuración)
4. [Carpeta Public](#carpeta-public)
5. [Carpeta Src](#carpeta-src)
6. [Componentes React](#componentes-react)
7. [Datos JSON](#datos-json)
8. [Tipos TypeScript](#tipos-typescript)
9. [Estilos CSS](#estilos-css)
10. [Flujo de la Aplicación](#flujo-de-la-aplicación)
11. [Conceptos Importantes](#conceptos-importantes)
12. [Cómo Funciona Todo](#cómo-funciona-todo)

---

## 🎯 Introducción

Este proyecto es un **portfolio personal** creado con:
- **React 18**: Librería de JavaScript para interfaces de usuario
- **TypeScript**: JavaScript con tipos (más seguro)
- **Bootstrap 5**: Framework CSS para diseño responsive
- **Create React App**: Herramienta que configura todo automáticamente

### ¿Qué hace este proyecto?

Muestra tu información personal, proyectos y habilidades en una página web moderna y profesional.

---

## 📁 Estructura del Proyecto

```
portfolio-starter/
├── node_modules/          # Dependencias instaladas (NO editar)
├── public/                # Archivos públicos estáticos
│   ├── favicon.ico       # Ícono del sitio
│   ├── index.html        # HTML principal
│   ├── logo192.png       # Logo pequeño
│   ├── logo512.png       # Logo grande
│   ├── manifest.json     # Configuración PWA
│   └── robots.txt        # Instrucciones para buscadores
├── src/                   # Código fuente (AQUÍ TRABAJAS)
│   ├── components/       # Componentes React
│   ├── data/             # Datos en JSON
│   ├── types/            # Definiciones TypeScript
│   ├── styles/           # Estilos CSS
│   ├── App.tsx           # Componente principal
│   ├── index.tsx         # Punto de entrada
│   └── ...               # Otros archivos
├── .gitignore            # Archivos que Git ignora
├── package.json          # Dependencias del proyecto
├── package-lock.json     # Versiones exactas de dependencias
├── tsconfig.json         # Configuración TypeScript
└── README.md             # Documentación
```

---

## ⚙️ Archivos de Configuración

### 📄 package.json

**¿Qué es?**
Es como una "receta" que dice qué ingredientes (dependencias) necesita tu proyecto.

**Contenido importante:**

```json
{
  "name": "portfolio-starter",           // Nombre del proyecto
  "version": "0.1.0",                    // Versión
  "dependencies": {                       // Paquetes necesarios
    "react": "^18.3.1",                  // React versión 18
    "react-dom": "^18.3.1",              // React para web
    "typescript": "^4.9.5",              // TypeScript
    "bootstrap": "^5.3.3",               // Bootstrap CSS
    "react-bootstrap": "^2.10.5"         // Bootstrap para React
  },
  "scripts": {                            // Comandos disponibles
    "start": "react-scripts start",      // Inicia servidor desarrollo
    "build": "react-scripts build",      // Crea versión producción
    "test": "react-scripts test"         // Ejecuta pruebas
  }
}
```

**Analogía:**
Es como la lista de ingredientes y pasos de una receta de cocina.

---

### 📄 tsconfig.json

**¿Qué es?**
Configuración de TypeScript, dice cómo compilar el código.

**Configuraciones importantes:**

```json
{
  "compilerOptions": {
    "target": "es5",                     // JavaScript compatible con navegadores viejos
    "lib": ["dom", "dom.iterable", "esnext"],  // Librerías disponibles
    "allowJs": true,                     // Permite archivos .js
    "skipLibCheck": true,                // Salta verificación de librerías
    "esModuleInterop": true,             // Compatibilidad con módulos
    "strict": true,                      // Modo estricto (más seguro)
    "jsx": "react-jsx",                  // Soporte para JSX/TSX
    "module": "esnext",                  // Sistema de módulos moderno
    "moduleResolution": "node",          // Resuelve módulos como Node.js
    "resolveJsonModule": true,           // Permite importar JSON
    "isolatedModules": true,             // Cada archivo se compila solo
    "noEmit": true                       // No genera archivos (CRA lo hace)
  },
  "include": ["src"]                     // Solo compila archivos en src/
}
```

**¿Por qué importa?**
Estas configuraciones permiten usar TypeScript de forma segura y eficiente.

---

### 📄 .gitignore

**¿Qué es?**
Lista de archivos/carpetas que Git NO debe rastrear.

```bash
# Dependencias
/node_modules              # Carpeta pesada con librerías
/.pnp
.pnp.js

# Testing
/coverage                  # Reportes de pruebas

# Producción
/build                     # Archivos compilados

# Misc
.DS_Store                  # Archivo de macOS
.env.local                 # Variables de entorno locales
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*             # Logs de errores
yarn-debug.log*
yarn-error.log*
```

**¿Por qué?**
No queremos subir node_modules a Git porque pesa mucho. Cada desarrollador ejecuta `npm install` para obtenerlos.

---

## 🌐 Carpeta Public

### 📄 public/index.html

**¿Qué es?**
El archivo HTML principal. React se inyecta aquí.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Portfolio personal creado con React y TypeScript"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>Portfolio Starter</title>
  </head>
  <body>
    <noscript>Necesitas habilitar JavaScript para ver esta app.</noscript>
    <!-- AQUÍ React inyecta todo el contenido -->
    <div id="root"></div>
  </body>
</html>
```

**Conceptos clave:**

1. **`<div id="root"></div>`**: Contenedor donde React monta la app
2. **`%PUBLIC_URL%`**: Variable que apunta a la carpeta public
3. **`<meta name="viewport">`**: Hace la página responsive
4. **`<noscript>`**: Mensaje si JavaScript está deshabilitado

**Analogía:**
Es como el "esqueleto" de tu página. React viene y le pone toda la "carne" (contenido).

---

### 📄 public/manifest.json

**¿Qué es?**
Configuración para convertir tu web en una Progressive Web App (PWA).

```json
{
  "short_name": "Portfolio",              // Nombre corto
  "name": "Portfolio Personal",           // Nombre completo
  "icons": [                              // Íconos para diferentes tamaños
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",                       // URL de inicio
  "display": "standalone",                // Se ve como app nativa
  "theme_color": "#000000",               // Color del tema
  "background_color": "#ffffff"           // Color de fondo al cargar
}
```

**¿Para qué sirve?**
Permite instalar tu web como una app en el teléfono (como Instagram o Facebook).

---

### 📄 public/robots.txt

**¿Qué es?**
Instrucciones para los robots de búsqueda (Google, Bing, etc.).

```txt
# https://www.robotstxt.org/robotstxt.html
User-agent: *        # Aplica a todos los robots
Disallow:            # No hay páginas prohibidas (permite indexar todo)
```

**¿Para qué sirve?**
Controla qué partes de tu sitio pueden indexar los buscadores.

---

## 💻 Carpeta Src

### 📄 src/index.tsx

**¿Qué es?**
El **punto de entrada** de la aplicación. Es lo primero que se ejecuta.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1. Busca el elemento con id="root" en index.html
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// 2. Renderiza (muestra) el componente App dentro de root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 3. Mide el rendimiento de la app (opcional)
reportWebVitals();
```

**Explicación línea por línea:**

1. **`import React from 'react'`**: Importa la librería React
2. **`import ReactDOM from 'react-dom/client'`**: Importa ReactDOM para renderizar
3. **`import './index.css'`**: Importa estilos globales
4. **`import App from './App'`**: Importa el componente principal
5. **`const root = ReactDOM.createRoot(...)`**: Crea un root de React
6. **`root.render(<App />)`**: Muestra App en el navegador
7. **`<React.StrictMode>`**: Modo estricto que detecta problemas

**Analogía:**
Es como el "director de orquesta" que dice: "React, empieza a tocar desde el componente App".

---

### 📄 src/App.tsx

**¿Qué es?**
El **componente principal** de la aplicación. Orquesta todo.

```tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Importa Bootstrap CSS
import './styles/App.css';                      // Importa estilos personalizados

// Importa componentes
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

// Importa datos JSON
import profileData from './data/profile.json';
import projectsData from './data/projects.json';

// Importa tipos TypeScript
import { Profile } from './types/Profile';
import { Project } from './types/Project';

function App() {
  // Convierte los datos JSON a tipos TypeScript
  const profile: Profile = profileData;
  const projects: Project[] = projectsData;

  return (
    <div className="App">
      {/* Muestra sección Hero con datos del perfil */}
      <Hero profile={profile} />
      
      {/* Muestra lista de proyectos */}
      <Projects projects={projects} />
      
      {/* Muestra pie de página */}
      <Footer />
    </div>
  );
}

export default App;
```

**Explicación detallada:**

1. **Imports de CSS**: Primero cargamos estilos (Bootstrap y custom)
2. **Imports de componentes**: Traemos Hero, Projects, Footer
3. **Imports de datos**: Cargamos profile.json y projects.json
4. **Imports de tipos**: Traemos las interfaces TypeScript
5. **Función App()**: Componente principal
6. **Constantes con tipos**: Asignamos tipos a los datos JSON
7. **Return JSX**: Estructura visual de la app
8. **Props**: Pasamos datos a componentes hijos

**Analogía:**
App es como el "director de una película" que dice qué escenas (componentes) mostrar y en qué orden.

---

## 🧩 Componentes React

### 📄 src/components/Hero.tsx

**¿Qué es?**
Componente que muestra la sección de bienvenida (nombre, título, descripción).

```tsx
import React from 'react';
import { Container } from 'react-bootstrap';  // Componente de Bootstrap
import { Profile } from '../types/Profile';   // Tipo TypeScript

// Interface para las props (propiedades) que recibe
interface HeroProps {
  profile: Profile;  // Objeto con datos del perfil
}

// Componente funcional con TypeScript
const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section className="hero bg-primary text-white py-5">
      <Container>
        <div className="text-center py-5">
          {/* Muestra el nombre del perfil */}
          <h1 className="display-4 fw-bold mb-3">{profile.nombre}</h1>
          
          {/* Muestra el título profesional */}
          <h2 className="h3 mb-4">{profile.titulo}</h2>
          
          {/* Muestra la descripción */}
          <p className="lead mb-4">{profile.descripcion}</p>
          
          {/* Botones para redes sociales */}
          <div className="d-flex gap-3 justify-content-center">
            {/* Solo muestra el botón si existe github en el perfil */}
            {profile.github && (
              <a 
                href={profile.github} 
                className="btn btn-light" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
            
            {/* Solo muestra el botón si existe linkedin en el perfil */}
            {profile.linkedin && (
              <a 
                href={profile.linkedin} 
                className="btn btn-outline-light" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
```

**Conceptos clave:**

1. **Props (propiedades)**: Datos que recibe el componente desde App
2. **Interface HeroProps**: Define qué props recibe (solo profile)
3. **React.FC<HeroProps>**: Tipo de componente funcional con props tipadas
4. **Destructuring `{ profile }`**: Extrae profile de las props
5. **JSX**: HTML dentro de JavaScript
6. **`{profile.nombre}`**: Interpolación, muestra valor de variable
7. **Renderizado condicional `&&`**: Solo muestra si la condición es true
8. **Container**: Componente de Bootstrap para centrar contenido
9. **Clases CSS**: `bg-primary`, `text-white`, `py-5`, etc. (Bootstrap)

**Analogía:**
Es como una "tarjeta de presentación" que recibe tus datos y los muestra bonitos.

---

### 📄 src/components/ProjectCard.tsx

**¿Qué es?**
Componente reutilizable para mostrar un proyecto individual.

```tsx
import React from 'react';
import { Card, Badge } from 'react-bootstrap';  // Componentes Bootstrap
import { Project } from '../types/Project';      // Tipo TypeScript

// Props que recibe: solo un proyecto
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="h-100 shadow-sm">
      {/* Imagen del proyecto */}
      <Card.Img 
        variant="top" 
        src={project.imagen} 
        alt={project.titulo} 
      />
      
      <Card.Body>
        {/* Título del proyecto */}
        <Card.Title>{project.titulo}</Card.Title>
        
        {/* Descripción del proyecto */}
        <Card.Text>{project.descripcion}</Card.Text>
        
        {/* Tecnologías usadas (badges) */}
        <div className="mb-3">
          {project.tecnologias.map((tech, index) => (
            <Badge 
              key={index} 
              bg="primary" 
              className="me-2 mb-2"
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        {/* Botones de acción */}
        <div className="d-flex gap-2">
          {/* Botón GitHub (solo si existe) */}
          {project.repositorio && (
            <a 
              href={project.repositorio} 
              className="btn btn-sm btn-outline-primary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          
          {/* Botón Demo (solo si existe) */}
          {project.demoLink && (
            <a 
              href={project.demoLink} 
              className="btn btn-sm btn-primary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Ver Demo
            </a>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
```

**Conceptos clave:**

1. **Card**: Componente de Bootstrap para tarjetas
2. **Card.Img**: Imagen en la parte superior
3. **Card.Body**: Contenido de la tarjeta
4. **Card.Title**: Título de la tarjeta
5. **Card.Text**: Texto de la tarjeta
6. **Badge**: Etiqueta pequeña (para tecnologías)
7. **`.map()`**: Itera sobre array de tecnologías
8. **`key={index}`**: Identificador único para elementos en lista (React lo requiere)
9. **`target="_blank"`**: Abre link en nueva pestaña
10. **`rel="noopener noreferrer"`**: Seguridad al abrir links externos

**Analogía:**
Es como una "ficha de producto" en una tienda online que muestra info del proyecto.

---

### 📄 src/components/Projects.tsx

**¿Qué es?**
Componente contenedor que muestra una grilla de proyectos.

```tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';  // Bootstrap grid
import { Project } from '../types/Project';
import ProjectCard from './ProjectCard';

// Props: recibe array de proyectos
interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="projects py-5">
      <Container>
        {/* Título de la sección */}
        <h2 className="text-center mb-5">Mis Proyectos</h2>
        
        {/* Grid de Bootstrap */}
        <Row className="g-4">
          {/* Itera sobre cada proyecto */}
          {projects.map((project) => (
            <Col 
              key={project.id}   // Identificador único
              md={6}             // 2 columnas en tablets
              lg={4}             // 3 columnas en desktop
            >
              {/* Renderiza ProjectCard para cada proyecto */}
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
```

**Conceptos clave:**

1. **Container**: Contenedor con padding responsive
2. **Row**: Fila del grid de Bootstrap
3. **Col**: Columna del grid
4. **`md={6}`**: En tablets (768px+) ocupa 6 de 12 columnas (50%)
5. **`lg={4}`**: En desktop (992px+) ocupa 4 de 12 columnas (33%)
6. **`g-4`**: Gap (espacio) entre columnas
7. **`.map()`**: Crea un ProjectCard por cada proyecto
8. **`key={project.id}`**: Identificador único (React optimization)

**Sistema de Grid de Bootstrap:**
```
12 columnas en total
md={6} = 6/12 = 50% = 2 columnas
lg={4} = 4/12 = 33% = 3 columnas
```

**Analogía:**
Es como un "álbum de fotos" donde cada foto es un proyecto.

---

### 📄 src/components/Footer.tsx

**¿Qué es?**
Pie de página con copyright.

```tsx
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
  // Obtiene el año actual automáticamente
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <div className="text-center">
          <p className="mb-0">
            &copy; {currentYear} Portfolio - Desarrollo Full Stack II - Duoc UC
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
```

**Conceptos clave:**

1. **`new Date().getFullYear()`**: Obtiene año actual (2025)
2. **`&copy;`**: Símbolo de copyright ©
3. **`{currentYear}`**: Interpolación del año
4. **No recibe props**: Es un componente estático

**Analogía:**
Es como el "pie de página" de un documento que siempre está al final.

---

## 📊 Datos JSON

### 📄 src/data/profile.json

**¿Qué es?**
Archivo JSON con tus datos personales.

```json
{
  "nombre": "Tu Nombre",
  "titulo": "Desarrollador Full Stack",
  "descripcion": "Estudiante de Desarrollo Full Stack en Duoc UC...",
  "email": "tu.email@ejemplo.com",
  "github": "https://github.com/tu-usuario",
  "linkedin": "https://linkedin.com/in/tu-usuario"
}
```

**¿Cómo se usa?**
```tsx
import profileData from './data/profile.json';
// profileData.nombre → "Tu Nombre"
// profileData.email → "tu.email@ejemplo.com"
```

**Ventajas:**
- Fácil de editar (no necesitas tocar código)
- Separación de datos y lógica
- Puedes cargarlo desde una API luego

---

### 📄 src/data/projects.json

**¿Qué es?**
Array de objetos JSON, cada uno es un proyecto.

```json
[
  {
    "id": 1,
    "titulo": "Portfolio Personal",
    "descripcion": "Portfolio desarrollado con React y TypeScript...",
    "imagen": "https://via.placeholder.com/400x300",
    "tecnologias": ["React", "TypeScript", "Bootstrap"],
    "repositorio": "https://github.com/tu-usuario/portfolio",
    "fecha": "2024-10-20"
  },
  {
    "id": 2,
    "titulo": "E-commerce",
    "descripcion": "Tienda online con carrito de compras...",
    "imagen": "https://via.placeholder.com/400x300",
    "tecnologias": ["React", "Node.js", "MongoDB"],
    "demoLink": "https://ejemplo.com",
    "fecha": "2024-09-15"
  }
]
```

**¿Cómo se usa?**
```tsx
import projectsData from './data/projects.json';
// projectsData[0].titulo → "Portfolio Personal"
// projectsData.length → 2
// projectsData.map() → Iterar sobre todos
```

**Estructura de cada proyecto:**
- **id**: Identificador único (número)
- **titulo**: Nombre del proyecto (string)
- **descripcion**: Descripción breve (string)
- **imagen**: URL de la imagen (string)
- **tecnologias**: Array de strings
- **repositorio**: URL opcional (string)
- **demoLink**: URL opcional (string)
- **fecha**: Fecha en formato ISO (string)

---

## 🔷 Tipos TypeScript

### 📄 src/types/Profile.ts

**¿Qué es?**
Interface que define la estructura de un perfil.

```typescript
export interface Profile {
  nombre: string;       // Obligatorio
  titulo: string;       // Obligatorio
  descripcion: string;  // Obligatorio
  email: string;        // Obligatorio
  github?: string;      // Opcional (?)
  linkedin?: string;    // Opcional (?)
}
```

**¿Para qué sirve?**
TypeScript verifica que los datos cumplan esta estructura:

```tsx
// ✅ VÁLIDO
const perfil: Profile = {
  nombre: "Juan",
  titulo: "Developer",
  descripcion: "...",
  email: "juan@mail.com"
};

// ❌ ERROR: Falta "titulo"
const perfil2: Profile = {
  nombre: "Juan",
  descripcion: "...",
  email: "juan@mail.com"
};

// ✅ VÁLIDO (github es opcional)
const perfil3: Profile = {
  nombre: "Juan",
  titulo: "Developer",
  descripcion: "...",
  email: "juan@mail.com",
  github: "https://github.com/juan"
};
```

**Explicación de `?` (opcional):**
- `github?: string` significa que puede existir o no
- Sin `?` es obligatorio

---

### 📄 src/types/Project.ts

**¿Qué es?**
Interface que define la estructura de un proyecto.

```typescript
export interface Project {
  id: number;              // Obligatorio
  titulo: string;          // Obligatorio
  descripcion: string;     // Obligatorio
  imagen: string;          // Obligatorio
  tecnologias: string[];   // Obligatorio (array)
  repositorio?: string;    // Opcional
  demoLink?: string;       // Opcional
  fecha: string;           // Obligatorio
}
```

**¿Por qué usar interfaces?**

1. **Autocompletado**: VS Code te sugiere propiedades
2. **Errores en tiempo de desarrollo**: Te avisa antes de ejecutar
3. **Documentación**: Sabes qué esperar
4. **Refactoring seguro**: Cambias la interface y detecta problemas

**Ejemplo de error detectado:**

```tsx
const proyecto: Project = {
  id: 1,
  titulo: "Mi Proyecto",
  descripcion: "...",
  imagen: "...",
  tecnologias: ["React"],
  fecha: "2024-10-20"
  // ✅ Todo correcto
};

const proyecto2: Project = {
  id: 1,
  titulo: "Mi Proyecto",
  // ❌ ERROR: Falta "descripcion"
};
```

---

## 🎨 Estilos CSS

### 📄 src/styles/App.css

**¿Qué es?**
Archivo CSS con estilos personalizados.

```css
/* Variables CSS */
:root {
  /* Colores Principales */
  --color-primary: #2563eb;      /* Azul */
  --color-secondary: #7c3aed;    /* Púrpura */
  --color-dark: #1e293b;         /* Gris oscuro */
  --color-light: #f8fafc;        /* Gris claro */
  
  /* Espaciado */
  --spacing-xs: 0.5rem;          /* 8px */
  --spacing-sm: 1rem;            /* 16px */
  --spacing-md: 2rem;            /* 32px */
  --spacing-lg: 4rem;            /* 64px */
  
  /* Tipografía */
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  --font-size-base: 1rem;        /* 16px */
  --font-size-lg: 1.25rem;       /* 20px */
  --font-size-xl: 2rem;          /* 32px */
}

/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;        /* Padding no afecta width */
}

/* Estilos globales */
body {
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: var(--color-dark);
  background-color: var(--color-light);
}

/* Contenedor */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-sm);
}

/* Secciones */
section {
  padding: var(--spacing-lg) 0;
}

/* Títulos */
h1, h2, h3 {
  margin-bottom: var(--spacing-sm);
  font-weight: 700;
}

h1 {
  font-size: var(--font-size-xl);
}

h2 {
  font-size: var(--font-size-lg);
}

/* Botón primario */
.btn-primary {
  background-color: var(--color-primary);
  color: white;
  padding: var(--spacing-xs) var(--spacing-sm);
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn-primary:hover {
  opacity: 0.9;
}
```

**Conceptos CSS importantes:**

1. **`:root`**: Define variables globales
2. **`var(--nombre)`**: Usa una variable CSS
3. **`box-sizing: border-box`**: Padding incluido en width
4. **`rem`**: Unidad relativa al tamaño de fuente raíz
5. **`transition`**: Animación suave
6. **`:hover`**: Estilos al pasar el mouse

**Ventajas de variables CSS:**
```css
/* En lugar de repetir */
color: #2563eb;
background: #2563eb;
border: 1px solid #2563eb;

/* Usas */
color: var(--color-primary);
background: var(--color-primary);
border: 1px solid var(--color-primary);
```

Si cambias el color, se actualiza en todos lados.

---

### 📄 src/index.css

**¿Qué es?**
Estilos globales básicos (viene por defecto).

```css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
```

**Propósito:**
- Resetea márgenes del body
- Define fuentes del sistema (rápido, nativo)
- Mejora renderizado de fuentes

---

## 🔄 Flujo de la Aplicación

### 1. Usuario abre la página

```
1. Navegador carga index.html
2. index.html tiene <div id="root"></div>
3. Navegador ejecuta JavaScript
```

### 2. React se inicia

```
1. index.tsx es el punto de entrada
2. ReactDOM.createRoot() crea un root
3. root.render(<App />) renderiza App
```

### 3. App se renderiza

```
1. App.tsx importa datos JSON
2. App.tsx importa componentes
3. App.tsx pasa datos como props a componentes
4. Componentes renderizan JSX
```

### 4. Componentes se muestran

```
1. Hero recibe profile y muestra nombre, título, descripción
2. Projects recibe projects y crea ProjectCards
3. Footer muestra copyright
```

### 5. Usuario interactúa

```
1. Usuario hace click en botón GitHub
2. Navegador abre nueva pestaña con el link
```

---

## 🧠 Conceptos Importantes

### 1. ¿Qué es un Componente?

**Definición:**
Pieza reutilizable de UI (interfaz de usuario).

**Analogía:**
Como bloques de LEGO. Juntas componentes pequeños para crear una app grande.

**Ejemplo:**
```tsx
// Componente Button
const Button = ({ text }) => {
  return <button>{text}</button>;
};

// Usar el componente
<Button text="Click me" />
<Button text="Submit" />
<Button text="Cancel" />
```

---

### 2. ¿Qué son las Props?

**Definición:**
Datos que se pasan de un componente padre a un hijo.

**Analogía:**
Como argumentos de una función.

**Ejemplo:**
```tsx
// Padre pasa datos
<Hero profile={myProfile} />

// Hijo recibe datos
const Hero = ({ profile }) => {
  return <h1>{profile.nombre}</h1>;
};
```

**Características:**
- Son **inmutables** (no se pueden cambiar en el hijo)
- Fluyen en **una dirección** (padre → hijo)
- Permiten **reutilización** (mismo componente, diferentes datos)

---

### 3. ¿Qué es JSX?

**Definición:**
Sintaxis que mezcla JavaScript y HTML.

**Ejemplo:**
```tsx
// JSX
const elemento = <h1>Hola {nombre}</h1>;

// Se compila a:
const elemento = React.createElement('h1', null, 'Hola ', nombre);
```

**Reglas JSX:**
1. **Un solo elemento raíz**: Usa `<div>` o `<>` (Fragment)
2. **Cerrar todas las etiquetas**: `<img />`, `<input />`
3. **`className` en lugar de `class`**: Porque `class` es palabra reservada en JS
4. **Interpolación con `{}`**: Variables, expresiones, funciones

**Ejemplos:**
```tsx
// ✅ VÁLIDO
return (
  <div>
    <h1>Título</h1>
    <p>Párrafo</p>
  </div>
);

// ❌ INVÁLIDO (dos elementos raíz)
return (
  <h1>Título</h1>
  <p>Párrafo</p>
);

// ✅ VÁLIDO (Fragment)
return (
  <>
    <h1>Título</h1>
    <p>Párrafo</p>
  </>
);
```

---

### 4. ¿Qué es TypeScript?

**Definición:**
JavaScript con tipos. Te avisa de errores antes de ejecutar.

**Sin TypeScript (JavaScript):**
```javascript
function suma(a, b) {
  return a + b;
}

suma(5, "10");  // "510" (concatena strings) 😱
```

**Con TypeScript:**
```typescript
function suma(a: number, b: number): number {
  return a + b;
}

suma(5, "10");  // ❌ ERROR: "10" no es número
```

**Ventajas:**
1. **Detecta errores temprano** (antes de ejecutar)
2. **Autocompletado** (VS Code te sugiere)
3. **Refactoring seguro** (cambias algo, detecta problemas)
4. **Documentación** (los tipos explican qué esperar)

---

### 5. ¿Qué es Bootstrap?

**Definición:**
Framework CSS con estilos y componentes predefinidos.

**Ventajas:**
- **Responsive**: Funciona en móvil, tablet, desktop
- **Grid system**: Sistema de columnas flexible
- **Componentes**: Botones, cards, navbar, etc. ya diseñados

**Ejemplo sin Bootstrap:**
```css
/* Tienes que escribir todo esto */
.button {
  padding: 10px 20px;
  background: blue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
```

**Ejemplo con Bootstrap:**
```html
<!-- Solo agrega la clase -->
<button className="btn btn-primary">Click</button>
```

**Grid System:**
```html
<Container>
  <Row>
    <Col md={6}>Columna 1 (50%)</Col>
    <Col md={6}>Columna 2 (50%)</Col>
  </Row>
</Container>
```

---

### 6. ¿Qué es React Bootstrap?

**Definición:**
Componentes de Bootstrap adaptados para React.

**Bootstrap normal (HTML):**
```html
<button class="btn btn-primary" data-toggle="modal">
  Click
</button>
```

**React Bootstrap:**
```tsx
import { Button } from 'react-bootstrap';

<Button variant="primary" onClick={handleClick}>
  Click
</Button>
```

**Ventajas:**
- Sintaxis de React (props en lugar de atributos)
- No necesitas jQuery
- TypeScript support
- Más fácil de usar con estado

---

### 7. ¿Qué es node_modules?

**Definición:**
Carpeta con todas las dependencias (librerías) instaladas.

**¿Por qué es tan pesada?**
Contiene miles de archivos. Por ejemplo:
- React
- React-DOM
- TypeScript
- Bootstrap
- Y todas sus dependencias

**¿Por qué no se sube a Git?**
- Es muy pesada (100+ MB)
- Se puede regenerar con `npm install`
- Cada desarrollador la genera localmente

**Flujo:**
```bash
# Desarrollador 1
npm install           # Crea node_modules
git add .gitignore    # Ignora node_modules
git commit
git push

# Desarrollador 2
git clone ...         # No trae node_modules
npm install           # Genera su propia node_modules
```

---

### 8. ¿Qué es package-lock.json?

**Definición:**
Archivo que guarda las versiones **exactas** de todas las dependencias.

**package.json:**
```json
{
  "dependencies": {
    "react": "^18.3.1"   // ^ = cualquier 18.x.x
  }
}
```

**package-lock.json:**
```json
{
  "dependencies": {
    "react": {
      "version": "18.3.1"  // Versión exacta instalada
    }
  }
}
```

**¿Por qué importa?**
Garantiza que todos los desarrolladores usen las mismas versiones.

---

## 🔍 Cómo Funciona Todo Junto

### Ejemplo: Mostrar un proyecto

**1. Usuario abre la página**
```
Navegador carga index.html
```

**2. React se inicia**
```
index.tsx ejecuta ReactDOM.render(<App />)
```

**3. App se renderiza**
```tsx
// App.tsx
import projectsData from './data/projects.json';

function App() {
  const projects = projectsData;  // Carga datos
  
  return (
    <div>
      <Projects projects={projects} />  {/* Pasa datos */}
    </div>
  );
}
```

**4. Projects recibe datos**
```tsx
// Projects.tsx
const Projects = ({ projects }) => {
  return (
    <Row>
      {projects.map(project => (
        <Col key={project.id}>
          <ProjectCard project={project} />  {/* Pasa cada proyecto */}
        </Col>
      ))}
    </Row>
  );
};
```

**5. ProjectCard muestra proyecto**
```tsx
// ProjectCard.tsx
const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Card.Img src={project.imagen} />
      <Card.Title>{project.titulo}</Card.Title>
      <Card.Text>{project.descripcion}</Card.Text>
    </Card>
  );
};
```

**6. Usuario ve el resultado**
```
Navegador muestra cards con proyectos
```

---

## 🎓 Glosario de Términos

| Término | Definición | Analogía |
|---------|-----------|----------|
| **React** | Librería para construir UI | Motor de un auto |
| **Component** | Pieza reutilizable de UI | Bloque de LEGO |
| **Props** | Datos que pasan a componentes | Argumentos de función |
| **JSX** | HTML dentro de JavaScript | Mezcla de idiomas |
| **TypeScript** | JavaScript con tipos | JavaScript con casco de seguridad |
| **Interface** | Define estructura de objeto | Plano de construcción |
| **JSON** | Formato de datos | Lista de compras |
| **Bootstrap** | Framework CSS | Plantillas de diseño |
| **npm** | Gestor de paquetes | App Store de Node |
| **node_modules** | Carpeta con librerías | Biblioteca |
| **package.json** | Lista de dependencias | Receta de cocina |
| **Import** | Traer código de otro archivo | Tomar libro de biblioteca |
| **Export** | Exponer código a otros archivos | Prestar libro |
| **Render** | Mostrar componente en pantalla | Dibujar en lienzo |

---

## 📚 Recursos Adicionales

### Documentación Oficial
- [React Docs](https://react.dev/) - Documentación de React
- [TypeScript Docs](https://www.typescriptlang.org/) - Documentación de TypeScript
- [Bootstrap Docs](https://getbootstrap.com/) - Documentación de Bootstrap
- [React Bootstrap](https://react-bootstrap.github.io/) - Componentes React Bootstrap

### Tutoriales
- [React Tutorial](https://react.dev/learn) - Tutorial oficial de React
- [TypeScript for Beginners](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- [Bootstrap Grid](https://getbootstrap.com/docs/5.3/layout/grid/)

### Herramientas
- [VS Code](https://code.visualstudio.com/) - Editor de código
- [Node.js](https://nodejs.org/) - Runtime de JavaScript
- [Git](https://git-scm.com/) - Control de versiones

---

## ✅ Checklist de Comprensión

- [ ] Entiendo qué es React
- [ ] Entiendo qué son los componentes
- [ ] Entiendo qué son las props
- [ ] Entiendo qué es JSX
- [ ] Entiendo qué es TypeScript
- [ ] Entiendo qué son las interfaces
- [ ] Entiendo qué es JSON
- [ ] Entiendo el flujo de la aplicación
- [ ] Entiendo el grid de Bootstrap
- [ ] Entiendo cómo importar/exportar
- [ ] Entiendo node_modules y package.json
- [ ] Puedo personalizar los datos JSON
- [ ] Puedo modificar estilos CSS
- [ ] Puedo agregar un nuevo componente

---

## 🆘 Preguntas Frecuentes

### ¿Por qué usar TypeScript en lugar de JavaScript?

**Respuesta:**
TypeScript detecta errores antes de ejecutar el código. Es como tener un corrector ortográfico para tu código.

---

### ¿Por qué los componentes empiezan con mayúscula?

**Respuesta:**
Es una convención de React. Las mayúsculas indican que es un componente React, no un elemento HTML.

```tsx
<Button />   // Componente React
<button />   // Elemento HTML
```

---

### ¿Qué es ese `{ }` en JSX?

**Respuesta:**
Es interpolación. Te permite ejecutar JavaScript dentro de JSX.

```tsx
const nombre = "Juan";
<h1>Hola {nombre}</h1>           // Hola Juan
<h1>Hola {nombre.toUpperCase()}</h1>  // Hola JUAN
<h1>Hola {2 + 2}</h1>            // Hola 4
```

---

### ¿Por qué `className` en lugar de `class`?

**Respuesta:**
Porque `class` es una palabra reservada en JavaScript (para crear clases). JSX usa `className` para evitar conflictos.

---

### ¿Qué significa el `?` en TypeScript?

**Respuesta:**
Indica que una propiedad es opcional.

```typescript
interface User {
  nombre: string;    // Obligatorio
  edad?: number;     // Opcional
}

// ✅ Válido
const user1 = { nombre: "Juan" };
const user2 = { nombre: "Juan", edad: 25 };
```

---

### ¿Para qué sirve el `key` en listas?

**Respuesta:**
React necesita identificar cada elemento de forma única para optimizar el renderizado.

```tsx
{projects.map(project => (
  <ProjectCard 
    key={project.id}      // Identificador único
    project={project} 
  />
))}
```

Sin `key`, React no sabe qué elemento cambió y re-renderiza todo.

---

### ¿Qué es `npm start`?

**Respuesta:**
Comando que inicia el servidor de desarrollo. Ejecuta `react-scripts start` definido en package.json.

---

### ¿Por qué imports relativos (`./` y `../`)?

**Respuesta:**
- `./`: Mismo directorio
- `../`: Directorio padre

```tsx
import Hero from './components/Hero';        // src/components/Hero
import profileData from '../data/profile.json';  // Sube un nivel
```

---

## 🎉 Conclusión

¡Felicidades! Ahora entiendes:

✅ La estructura completa del proyecto
✅ Cómo funcionan los componentes React
✅ Qué son las props y cómo se usan
✅ Qué es TypeScript y las interfaces
✅ Cómo se cargan los datos JSON
✅ El sistema de grid de Bootstrap
✅ El flujo completo de la aplicación

**Próximos pasos:**
1. Personaliza `profile.json` con tus datos
2. Agrega tus proyectos a `projects.json`
3. Cambia colores en `App.css`
4. Crea nuevos componentes
5. Aprende sobre hooks (useState, useEffect)

---

<div align="center">

**¡Ahora tienes el conocimiento para personalizar y extender este proyecto!**

**Creado por: Profesor Sting Adams - Duoc UC 2025**

</div>
