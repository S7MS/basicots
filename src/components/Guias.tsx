import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Guias: React.FC = () => {
  const [selectedGuide, setSelectedGuide] = useState<string | null>(null);

  const guias = [
    {
      id: 'inicio-rapido',
      title: 'Inicio Rápido',
      description: 'Guía de inicio rápido para configurar y ejecutar el proyecto.',
      content: `
# INICIO RÁPIDO

## Requisitos Previos
- Node.js (versión 16 o superior)
- npm o yarn
- Git
- Editor de código (VS Code recomendado)

## Instalación

### 1. Clonar el repositorio
\`\`\`bash
git clone https://github.com/S7MS/basicots.git
cd basicots
\`\`\`

### 2. Instalar dependencias
\`\`\`bash
npm install
\`\`\`

### 3. Ejecutar el proyecto
\`\`\`bash
npm start
\`\`\`

El proyecto se abrirá automáticamente en http://localhost:3000

## Estructura del Proyecto

- **/src/components** - Componentes React
- **/src/data** - Datos estáticos (productos, perfil)
- **/src/types** - Definiciones de TypeScript
- **/src/utils** - Funciones auxiliares
- **/public** - Archivos estáticos

## Navegación

- **Portfolio**: Muestra tu portfolio personal
- **Tienda Tech**: Aplicación de e-commerce para practicar
- **Guías**: Documentación y tutoriales

## Próximos Pasos

1. Explora el código en /src
2. Modifica los datos en /src/data
3. Revisa la Guía Completa del Proyecto
4. Practica con la Tienda Tech
5. Aprende testing con la Guía de Testing
      `
    },
    {
      id: 'guia-completa',
      title: 'Guía Completa del Proyecto',
      description: 'Documentación completa sobre la estructura y funcionamiento del proyecto portfolio.',
      content: `
# GUÍA COMPLETA DEL PROYECTO

## Descripción General

Este es un proyecto educativo que combina:
- Un portfolio personal profesional
- Una aplicación de tienda tech para practicar
- Material educativo sobre testing

## Arquitectura

### Componentes Principales

#### 1. App.tsx
Componente raíz que maneja la navegación entre secciones.

#### 2. Navbar.tsx
Barra de navegación principal con tres secciones:
- Portfolio
- Tienda Tech
- Guías

#### 3. Portfolio
Componentes del portfolio:
- **Hero**: Sección de presentación personal
- **Projects**: Muestra tus proyectos
- **Footer**: Pie de página con enlaces

#### 4. TiendaTech
Aplicación completa de e-commerce con:
- **Header**: Encabezado con carrito
- **ProductList**: Lista de productos
- **ProductCard**: Tarjeta individual de producto
- **ShoppingCart**: Carrito de compras

#### 5. Guias
Documentación y tutoriales integrados.

## Tecnologías

- **React 18**: Biblioteca UI
- **TypeScript**: Tipado estático
- **Bootstrap 5**: Framework CSS
- **React Bootstrap**: Componentes React de Bootstrap

## Personalización

### Modificar tu Información
Edita: \`src/data/profile.json\`

### Agregar Proyectos
Edita: \`src/data/projects.json\`

### Cambiar Productos
Edita: \`src/data/products.ts\`

## Despliegue

### Build de Producción
\`\`\`bash
npm run build
\`\`\`

### Desplegar en Railway/Vercel/Netlify
El proyecto está listo para desplegarse en cualquier plataforma que soporte aplicaciones React.

## Buenas Prácticas

1. **Componentes pequeños y reutilizables**
2. **Tipado estricto con TypeScript**
3. **Separación de lógica y presentación**
4. **Código limpio y comentado**
      `
    },
    {
      id: 'testing',
      title: 'Agregar Testing',
      description: 'Tutorial paso a paso para implementar pruebas unitarias con Jasmine y Karma.',
      content: `
# GUÍA: Cómo Agregar Testing a Este Proyecto

Esta guía te llevará paso a paso desde cero hasta tener un proyecto con pruebas unitarias completas usando **Jasmine** y **Karma**.

## Tabla de Contenidos

1. Instalación de Dependencias
2. Configuración de Karma
3. Configuración de TypeScript
4. Tu Primera Prueba
5. Probar Utilidades
6. Probar Componentes React
7. Usar Spies
8. Ejecutar las Pruebas
9. Ejercicios Prácticos

## 1. INSTALACIÓN DE DEPENDENCIAS

### Paso 1.1: Instalar Jasmine y Karma

Abre tu terminal en la carpeta del proyecto y ejecuta:

\`\`\`bash
npm install --save-dev jasmine-core karma karma-jasmine karma-chrome-launcher karma-typescript karma-webpack
\`\`\`

### Paso 1.2: Instalar Tipos de TypeScript

\`\`\`bash
npm install --save-dev @types/jasmine ts-loader webpack
\`\`\`

## 2. CONFIGURACIÓN DE KARMA

### Crear karma.conf.js

Crea un archivo llamado \`karma.conf.js\` en la raíz del proyecto:

\`\`\`javascript
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'karma-typescript'],
    files: [
      'src/**/*.ts',
      'src/**/*.tsx',
      'src/**/*.spec.ts',
      'src/**/*.spec.tsx'
    ],
    preprocessors: {
      'src/**/*.ts': ['karma-typescript'],
      'src/**/*.tsx': ['karma-typescript']
    },
    reporters: ['progress', 'karma-typescript'],
    browsers: ['Chrome'],
    singleRun: false
  });
};
\`\`\`

## 3. TU PRIMERA PRUEBA

### Crear src/utils/formatPrice.spec.ts:

\`\`\`typescript
import { formatPrice } from './formatPrice';

describe('formatPrice', () => {
  it('debe agregar el símbolo de peso ($)', () => {
    const resultado = formatPrice(1000);
    expect(resultado).toContain('$');
  });

  it('debe formatear 1000 como $1.000', () => {
    expect(formatPrice(1000)).toBe('$1.000');
  });
});
\`\`\`

## 4. EJECUTAR LAS PRUEBAS

\`\`\`bash
npm test
\`\`\`

## 5. USAR SPIES

Los **spies** son esenciales para probar componentes que usan callbacks.

\`\`\`typescript
describe('Ejemplo de Spies', () => {
  it('debe verificar que la función fue llamada', () => {
    const mySpy = jasmine.createSpy('callback');
    mySpy('argumento1', 'argumento2');
    
    expect(mySpy).toHaveBeenCalled();
    expect(mySpy).toHaveBeenCalledWith('argumento1', 'argumento2');
  });
});
\`\`\`

## EJERCICIOS PRÁCTICOS

### Ejercicio 1: Probar Header Component

Crea pruebas para el componente Header de la tienda.

### Ejercicio 2: Crear Clase Carrito

Implementa una clase Carrito con métodos y pruebas.

### Ejercicio 3: Pruebas de Integración

Crea pruebas que verifiquen el flujo completo de agregar productos al carrito.

## RECURSOS ADICIONALES

- [Documentación Jasmine](https://jasmine.github.io/)
- [Documentación Karma](https://karma-runner.github.io/)

## TIPS FINALES

1. Empieza simple: Primero funciones, luego componentes
2. Un concepto por prueba
3. Nombres descriptivos
4. beforeEach es tu amigo
5. Prueba lo importante
6. Casos límite: Siempre prueba con 0, null, valores extremos

¡Éxito con las pruebas!
      `
    }
  ];

  const renderGuideContent = (content: string) => {
    const lines = content.split('\n');
    return (
      <div className="guide-content" style={{ textAlign: 'left', whiteSpace: 'pre-wrap' }}>
        {lines.map((line, index) => {
          // Títulos principales
          if (line.startsWith('# ')) {
            return <h1 key={index} className="mt-4 mb-3">{line.substring(2)}</h1>;
          }
          // Títulos secundarios
          if (line.startsWith('## ')) {
            return <h2 key={index} className="mt-4 mb-3">{line.substring(3)}</h2>;
          }
          // Títulos terciarios
          if (line.startsWith('### ')) {
            return <h3 key={index} className="mt-3 mb-2">{line.substring(4)}</h3>;
          }
          // Bloques de código
          if (line.startsWith('```')) {
            return <div key={index} className="bg-dark text-light p-3 rounded my-2"><code>{line}</code></div>;
          }
          // Código inline
          if (line.includes('`')) {
            const parts = line.split('`');
            return (
              <p key={index}>
                {parts.map((part, i) => 
                  i % 2 === 0 ? part : <code key={i} className="bg-light px-1">{part}</code>
                )}
              </p>
            );
          }
          // Listas
          if (line.trim().startsWith('-') || line.trim().startsWith('*')) {
            return <li key={index}>{line.trim().substring(1).trim()}</li>;
          }
          // Texto normal
          if (line.trim()) {
            return <p key={index}>{line}</p>;
          }
          return <br key={index} />;
        })}
      </div>
    );
  };

  if (selectedGuide) {
    const guia = guias.find(g => g.id === selectedGuide);
    if (guia) {
      return (
        <Container className="mt-4">
          <Button 
            variant="outline-primary" 
            onClick={() => setSelectedGuide(null)}
            className="mb-4"
          >
            ← Volver a Guías
          </Button>
          <Card>
            <Card.Body>
              {renderGuideContent(guia.content)}
            </Card.Body>
          </Card>
        </Container>
      );
    }
  }

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1 className="text-center mb-4">Guías de Desarrollo</h1>
          <p className="text-center text-muted mb-5">
            Documentación y tutoriales para aprender desarrollo con React y TypeScript
          </p>
        </Col>
      </Row>
      
      <Row>
        {guias.map((guia) => (
          <Col md={6} lg={4} key={guia.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{guia.title}</Card.Title>
                <Card.Text className="flex-grow-1">
                  {guia.description}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => setSelectedGuide(guia.id)}
                  className="mt-auto"
                >
                  Ver Guía
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mt-5">
        <Col>
          <div className="alert alert-info">
            <h5>Para los estudiantes:</h5>
            <ul>
              <li>Comienza con la <strong>Guía de Inicio Rápido</strong> para configurar tu entorno</li>
              <li>Revisa la <strong>Guía Completa</strong> para entender la arquitectura del proyecto</li>
              <li>Usa la sección <strong>Tienda Tech</strong> para practicar y la <strong>Guía de Testing</strong> para aprender pruebas unitarias</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Guias;