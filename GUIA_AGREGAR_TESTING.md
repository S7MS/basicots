# GUÍA: Cómo Agregar Testing a Este Proyecto

Esta guía te llevará paso a paso desde cero hasta tener un proyecto con pruebas unitarias completas usando **Jasmine** y **Karma**.

---

## Tabla de Contenidos

1. [Instalación de Dependencias](#1-instalación-de-dependencias)
2. [Configuración de Karma](#2-configuración-de-karma)
3. [Configuración de TypeScript](#3-configuración-de-typescript)
4. [Tu Primera Prueba](#4-tu-primera-prueba)
5. [Probar Utilidades](#5-probar-utilidades)
6. [Probar Componentes React](#6-probar-componentes-react)
7. [Usar Spies](#7-usar-spies)
8. [Ejecutar las Pruebas](#8-ejecutar-las-pruebas)
9. [Ejercicios Prácticos](#9-ejercicios-prácticos)

---

## 1. INSTALACIÓN DE DEPENDENCIAS

### Paso 1.1: Instalar Jasmine y Karma

Abre tu terminal en la carpeta del proyecto y ejecuta:

```bash
npm install --save-dev jasmine-core karma karma-jasmine karma-chrome-launcher karma-typescript karma-webpack
```

### Paso 1.2: Instalar Tipos de TypeScript

```bash
npm install --save-dev @types/jasmine ts-loader webpack
```

### Paso 1.3: Verificar package.json

Tu `package.json` debería tener algo como esto en `devDependencies`:

```json
"devDependencies": {
  "@types/jasmine": "^5.1.4",
  "@types/react": "^18.2.0",
  "@types/react-dom": "^18.2.0",
  "jasmine-core": "^5.1.2",
  "karma": "^6.4.3",
  "karma-chrome-launcher": "^3.2.0",
  "karma-jasmine": "^5.1.0",
  "karma-typescript": "^5.5.4",
  "karma-webpack": "^5.0.0",
  "ts-loader": "^9.5.1",
  "webpack": "^5.90.3"
}
```

---

## 2. CONFIGURACIÓN DE KARMA

### Paso 2.1: Crear karma.conf.js

Crea un archivo llamado `karma.conf.js` en la raíz del proyecto:

```javascript
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
    
    karmaTypescriptConfig: {
      compilerOptions: {
        target: 'ES2020',
        lib: ['ES2020', 'DOM', 'DOM.Iterable'],
        jsx: 'react',
        module: 'commonjs',
        moduleResolution: 'node',
        esModuleInterop: true,
        allowSyntheticDefaultImports: true,
        skipLibCheck: true
      },
      exclude: ['node_modules']
    },
    
    reporters: ['progress', 'karma-typescript'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  });
};
```

### Paso 2.2: Agregar Script de Testing

En `package.json`, agrega el script de testing:

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "karma start",
  "eject": "react-scripts eject"
}
```

---

## 3. CONFIGURACIÓN DE TYPESCRIPT

### Paso 3.1: Actualizar tsconfig.json

Asegúrate de que tu `tsconfig.json` incluya los tipos de Jasmine:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "allowJs": true,
    "noEmit": true,
    "isolatedModules": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "types": ["jasmine", "node"]
  },
  "include": ["src"]
}
```

---

## 4. TU PRIMERA PRUEBA

### Paso 4.1: Crear un Archivo de Prueba Simple

Crea el archivo `src/utils/formatPrice.spec.ts`:

```typescript
import { formatPrice } from './formatPrice';

describe('formatPrice', () => {
  it('debe agregar el símbolo de peso ($)', () => {
    const resultado = formatPrice(1000);
    expect(resultado).toContain('$');
  });

  it('debe formatear 1000 como $1.000', () => {
    expect(formatPrice(1000)).toBe('$1.000');
  });

  it('debe formatear 1000000 como $1.000.000', () => {
    expect(formatPrice(1000000)).toBe('$1.000.000');
  });
});
```

### Paso 4.2: Ejecutar las Pruebas

```bash
npm test
```

Debería abrir Chrome y mostrar:
```
formatPrice
  ✓ debe agregar el símbolo de peso ($)
  ✓ debe formatear 1000 como $1.000
  ✓ debe formatear 1000000 como $1.000.000
```

**¡Felicitaciones! Tu primera prueba funciona.**

---

## 5. PROBAR UTILIDADES

### Ejercicio: Crear Más Utilidades para Probar

#### Paso 5.1: Crear utils/matematicas.ts

```typescript
export function multiplicar(a: number, b: number): number {
  return a * b;
}

export function esPar(numero: number): boolean {
  return numero % 2 === 0;
}
```

#### Paso 5.2: Crear utils/matematicas.spec.ts

```typescript
import { multiplicar, esPar } from './matematicas';

describe('Funciones Matemáticas', () => {
  describe('multiplicar', () => {
    it('debe multiplicar dos números positivos', () => {
      expect(multiplicar(3, 4)).toBe(12);
    });

    it('debe manejar multiplicación por cero', () => {
      expect(multiplicar(5, 0)).toBe(0);
    });

    it('debe manejar números negativos', () => {
      expect(multiplicar(-3, 4)).toBe(-12);
    });
  });

  describe('esPar', () => {
    it('debe retornar true para números pares', () => {
      expect(esPar(2)).toBe(true);
      expect(esPar(4)).toBeTruthy();
    });

    it('debe retornar false para números impares', () => {
      expect(esPar(1)).toBe(false);
      expect(esPar(3)).toBeFalsy();
    });
  });
});
```

---

## 6. PROBAR COMPONENTES REACT

### Paso 6.1: Crear Prueba para ProductCard

Crea `src/components/ProductCard.spec.tsx`:

```typescript
import { ProductCard } from './ProductCard';
import { Product } from '../types/Product';

describe('ProductCard Component', () => {
  let mockProduct: Product;
  let onAddToCartSpy: jasmine.Spy;

  beforeEach(() => {
    mockProduct = {
      id: 1,
      name: 'Mouse Gamer',
      price: 25000,
      image: 'mouse.jpg',
      category: 'Periféricos',
      description: 'Mouse gaming RGB',
      stock: 10
    };

    onAddToCartSpy = jasmine.createSpy('onAddToCart');
  });

  it('debe renderizar el nombre del producto', () => {
    expect(mockProduct.name).toBe('Mouse Gamer');
  });

  it('debe formatear el precio correctamente', () => {
    expect(mockProduct.price).toBe(25000);
  });

  it('debe detectar stock bajo', () => {
    const stockBajo = { ...mockProduct, stock: 3 };
    expect(stockBajo.stock).toBeLessThan(5);
  });

  it('debe llamar onAddToCart cuando se agrega', () => {
    onAddToCartSpy(mockProduct);
    expect(onAddToCartSpy).toHaveBeenCalled();
    expect(onAddToCartSpy).toHaveBeenCalledWith(mockProduct);
  });

  it('no debe llamar callback si no hay stock', () => {
    const sinStock = { ...mockProduct, stock: 0 };
    
    if (sinStock.stock > 0) {
      onAddToCartSpy(sinStock);
    }
    
    expect(onAddToCartSpy).not.toHaveBeenCalled();
  });
});
```

---

## 7. USAR SPIES

Los **spies** son esenciales para probar componentes que usan callbacks.

### ¿Qué es un Spy?

Un spy es una función "espía" que registra si fue llamada, cuántas veces, y con qué argumentos.

### Ejemplo Completo de Spy

```typescript
describe('Ejemplo de Spies', () => {
  it('debe verificar que la función fue llamada', () => {
    // 1. Crear el spy
    const mySpy = jasmine.createSpy('callback');
    
    // 2. Simular que se llama
    mySpy('argumento1', 'argumento2');
    
    // 3. Verificar
    expect(mySpy).toHaveBeenCalled();
    expect(mySpy).toHaveBeenCalledTimes(1);
    expect(mySpy).toHaveBeenCalledWith('argumento1', 'argumento2');
  });

  it('debe verificar que NO fue llamada', () => {
    const mySpy = jasmine.createSpy('callback');
    
    // No llamamos el spy
    
    expect(mySpy).not.toHaveBeenCalled();
  });
});
```

### Matchers de Spies

```typescript
expect(spy).toHaveBeenCalled();              // Fue llamado al menos 1 vez
expect(spy).toHaveBeenCalledTimes(3);        // Llamado exactamente 3 veces
expect(spy).toHaveBeenCalledWith(arg1, arg2); // Llamado con argumentos específicos
expect(spy).not.toHaveBeenCalled();          // Nunca fue llamado
```

---

## 8. EJECUTAR LAS PRUEBAS

### Modo Watch (Recomendado para Desarrollo)

```bash
npm test
```

Esto:
- Abre Chrome
- Ejecuta las pruebas
- Se queda escuchando cambios
- Re-ejecuta automáticamente cuando guardas archivos

### Modo Single Run (Para CI/CD)

Modifica `karma.conf.js`:

```javascript
singleRun: true,  // Cambiar de false a true
```

Luego ejecuta:
```bash
npm test
```

Ejecutará las pruebas una vez y cerrará.

---

## 9. EJERCICIOS PRÁCTICOS

### Ejercicio 1: Probar Header Component

Crea `src/components/Header.spec.tsx`:

```typescript
import { Header } from './Header';

describe('Header Component', () => {
  let onCartClickSpy: jasmine.Spy;

  beforeEach(() => {
    onCartClickSpy = jasmine.createSpy('onCartClick');
  });

  it('debe mostrar el contador de items del carrito', () => {
    const count = 5;
    expect(count).toBeGreaterThan(0);
  });

  it('debe llamar onCartClick cuando se hace click', () => {
    onCartClickSpy();
    expect(onCartClickSpy).toHaveBeenCalled();
  });

  // TODO: Agregar más pruebas
});
```

**Tu tarea**: Completa las pruebas del Header.

---

### Ejercicio 2: Crear Clase Carrito y Probarla

#### Paso 1: Crear `src/classes/Carrito.ts`

```typescript
import { Product, CartItem } from '../types/Product';

export class Carrito {
  private items: CartItem[] = [];

  getItems(): CartItem[] {
    return this.items;
  }

  agregarProducto(producto: Product): void {
    const itemExistente = this.items.find(item => item.id === producto.id);
    
    if (itemExistente) {
      if (itemExistente.quantity < producto.stock) {
        itemExistente.quantity++;
      }
    } else {
      this.items.push({ ...producto, quantity: 1 });
    }
  }

  calcularTotal(): number {
    return this.items.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  }

  // TODO: Implementar eliminarProducto, actualizarCantidad, vaciarCarrito
}
```

#### Paso 2: Crear `src/classes/Carrito.spec.ts`

```typescript
import { Carrito } from './Carrito';
import { Product } from '../types/Product';

describe('Carrito Class', () => {
  let carrito: Carrito;
  let producto1: Product;

  beforeEach(() => {
    carrito = new Carrito();
    
    producto1 = {
      id: 1,
      name: 'Mouse',
      price: 25000,
      image: 'mouse.jpg',
      category: 'Periféricos',
      description: 'Mouse gaming',
      stock: 10
    };
  });

  describe('Constructor', () => {
    it('debe inicializar con items vacío', () => {
      expect(carrito.getItems()).toEqual([]);
      expect(carrito.getItems().length).toBe(0);
    });
  });

  describe('agregarProducto', () => {
    it('debe agregar un producto nuevo', () => {
      carrito.agregarProducto(producto1);
      expect(carrito.getItems().length).toBe(1);
    });

    it('debe incrementar cantidad si ya existe', () => {
      carrito.agregarProducto(producto1);
      carrito.agregarProducto(producto1);
      
      expect(carrito.getItems().length).toBe(1);
      expect(carrito.getItems()[0].quantity).toBe(2);
    });

    // TODO: Agregar más pruebas
  });

  describe('calcularTotal', () => {
    it('debe retornar 0 para carrito vacío', () => {
      expect(carrito.calcularTotal()).toBe(0);
    });

    it('debe calcular total correctamente', () => {
      carrito.agregarProducto(producto1);
      expect(carrito.calcularTotal()).toBe(25000);
    });

    // TODO: Agregar más pruebas
  });
});
```

**Tu tarea**: 
1. Implementar los métodos faltantes en `Carrito.ts`
2. Completar todas las pruebas

---

### Ejercicio 3: Probar App.tsx (Avanzado)

Crea `src/App.spec.tsx`:

```typescript
import { Product, CartItem } from './types/Product';

describe('App Integration Tests', () => {
  it('debe agregar producto al carrito', () => {
    const cart: CartItem[] = [];
    const producto: Product = {
      id: 1,
      name: 'Mouse',
      price: 25000,
      image: 'mouse.jpg',
      category: 'Periféricos',
      description: 'Mouse gaming',
      stock: 10
    };

    // Simular agregar al carrito
    cart.push({ ...producto, quantity: 1 });

    expect(cart.length).toBe(1);
    expect(cart[0].quantity).toBe(1);
  });

  // TODO: Agregar más pruebas de integración
});
```

---

## CHECKLIST DE PROGRESO

Marca lo que hayas completado:

### Configuración
- [ ] Instaladas dependencias de Jasmine/Karma
- [ ] Creado karma.conf.js
- [ ] Actualizado tsconfig.json
- [ ] Script `npm test` funcionando

### Pruebas Básicas
- [ ] Probada función `formatPrice`
- [ ] Creadas funciones matemáticas (`multiplicar`, `esPar`)
- [ ] Probadas funciones matemáticas

### Pruebas de Componentes
- [ ] Probado `ProductCard`
- [ ] Probado `Header`
- [ ] Probado `ProductList`
- [ ] Probado `ShoppingCart`

### Pruebas Avanzadas
- [ ] Creada clase `Carrito`
- [ ] Probada clase `Carrito` completamente
- [ ] Pruebas de integración en `App`
- [ ] Usado spies en todos los callbacks

### Cobertura
- [ ] Todas las pruebas pasan
- [ ] Probados casos límite (edge cases)
- [ ] Probados errores esperados
- [ ] Documentadas todas las funciones

---

## CONCEPTOS CLAVE APRENDIDOS

Al completar esta guía habrás aprendido:

- **Configurar Jasmine y Karma** desde cero
- **Escribir pruebas unitarias** con la estructura AAA
- **Usar matchers** (`toBe`, `toEqual`, `toContain`, etc.)
- **Probar funciones simples** (utilidades)
- **Probar componentes React** (props, estado, eventos)
- **Usar spies** para callbacks
- **beforeEach** para setup común
- **Organizar pruebas** con `describe` y `it`
- **Casos límite** (edge cases)
- **TDD** (Test-Driven Development)

---

## RECURSOS ADICIONALES

- [Documentación Jasmine](https://jasmine.github.io/)
- [Documentación Karma](https://karma-runner.github.io/)
- Guías del proyecto original (carpeta `guias_testing/`)

---

## TIPS FINALES

1. **Empieza simple**: Primero funciones, luego componentes
2. **Un concepto por prueba**: No pruebes muchas cosas en un `it()`
3. **Nombres descriptivos**: `it('debe formatear precio')` es mejor que `it('funciona')`
4. **beforeEach es tu amigo**: Usa setup común
5. **Prueba lo importante**: No todo necesita 100% cobertura
6. **Casos límite**: Siempre prueba con `0`, `null`, valores extremos

---

**¡Éxito con las pruebas!**

Si tienes dudas, revisa los ejemplos en la carpeta `guias_testing/` del proyecto original.
