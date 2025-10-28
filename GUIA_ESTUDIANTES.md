#  GUÍA DE ESTUDIO - Testing con Jasmine y Karma


 Las pruebas son código que verifica que tu código funciona correctamente.

---

## 📚 ¿Qué Aprenderás?

- ✅ Qué son las pruebas unitarias y por qué son importantes
- ✅ Cómo usar Jasmine (framework de testing)
- ✅ Cómo usar Karma (ejecutor de pruebas)
- ✅ Escribir tus primeras pruebas
- ✅ Probar componentes React

---

## 🎯 1. ¿QUÉ SON LAS PRUEBAS UNITARIAS?

### Explicación Simple

Imagina que construyes con LEGO. Antes de armar el castillo completo, verificas que cada pieza encaje bien. Las **pruebas unitarias** hacen lo mismo con el código: verifican que cada parte funcione correctamente por separado.

### ¿Por qué son importantes?

1. **Encuentran errores rápido**: Como revisar tu tarea antes de entregarla
2. **Te dan confianza**: Sabes que tu código funciona
3. **Documentan el código**: Explican qué hace cada función
4. **Facilitan cambios**: Puedes modificar código sin miedo a romperlo

### Ejemplo del Mundo Real

Cuando compras en línea:
- ✅ ¿El botón "Agregar al Carrito" funciona?
- ✅ ¿Se suma el precio correctamente?
- ✅ ¿Puedes eliminar productos?

Cada una de estas funciones necesita pruebas.

---

## 🔧 2. HERRAMIENTAS QUE USAREMOS

### Jasmine 🌸

**¿Qué es?**: Un framework para escribir pruebas.

**Piensa en Jasmine como**: Un idioma especial para decir "Espero que esto funcione así"

**Ejemplo**:
```typescript
// En español: "Espero que 2 + 3 sea igual a 5"
// En Jasmine:
expect(2 + 3).toBe(5);
```

### Karma 🎭

**¿Qué es?**: Un programa que ejecuta tus pruebas en navegadores reales (Chrome, Firefox, etc.)

**Piensa en Karma como**: El maestro que revisa si tus respuestas están correctas.

---

## 📝 3. TU PRIMERA PRUEBA

### Estructura Básica

Toda prueba tiene esta estructura:

```typescript
describe('Nombre del grupo de pruebas', () => {
  it('debe hacer algo específico', () => {
    // Tu código de prueba aquí
  });
});
```

- **describe**: Agrupa pruebas relacionadas (como una carpeta)
- **it**: Define una prueba individual (como un archivo)

### Ejemplo Real: Sumar Números

```typescript
// Función que queremos probar
function sumar(a: number, b: number): number {
  return a + b;
}

// Prueba de la función
describe('Función sumar', () => {
  it('debe sumar dos números correctamente', () => {
    const resultado = sumar(2, 3);
    expect(resultado).toBe(5);
  });
});
```

**¿Qué hace esta prueba?**
1. Llama a la función `sumar(2, 3)`
2. Verifica que el resultado sea `5`
3. Si es 5: ✅ Prueba pasa
4. Si no es 5: ❌ Prueba falla

---

## 🎨 4. PATRÓN AAA (Arrange-Act-Assert)

### Las 3 A's de Testing

Todas las pruebas siguen este patrón:

```typescript
it('debe calcular el total', () => {
  // 1. ARRANGE (Preparar): Configura los datos
  const precio = 100;
  const cantidad = 2;
  
  // 2. ACT (Actuar): Ejecuta la acción
  const total = precio * cantidad;
  
  // 3. ASSERT (Verificar): Comprueba el resultado
  expect(total).toBe(200);
});
```

**Piensa en esto como una receta**:
1. **Arrange**: Reúne los ingredientes
2. **Act**: Cocina el platillo
3. **Assert**: Prueba si sabe bien

---

## 🔍 5. MATCHERS (COMPARADORES)

Los **matchers** son formas de comparar valores.

### Matchers Más Usados

#### toBe() - "Debe ser"
Compara valores simples (números, textos, true/false)

```typescript
expect(5).toBe(5);                    // ✅ Pasa
expect('hola').toBe('hola');          // ✅ Pasa
expect(true).toBe(true);              // ✅ Pasa
```

#### toEqual() - "Debe ser igual a"
Compara objetos y arrays completos

```typescript
expect({nombre: 'Juan'}).toEqual({nombre: 'Juan'});  // ✅ Pasa
expect([1, 2, 3]).toEqual([1, 2, 3]);                // ✅ Pasa
```

#### toBeTruthy() - "Debe ser verdadero"
```typescript
expect('texto').toBeTruthy();         // ✅ Pasa
expect(1).toBeTruthy();               // ✅ Pasa
expect(0).toBeTruthy();               // ❌ Falla (0 es falsy)
```

#### toBeFalsy() - "Debe ser falso"
```typescript
expect(0).toBeFalsy();                // ✅ Pasa
expect('').toBeFalsy();               // ✅ Pasa
expect(null).toBeFalsy();             // ✅ Pasa
```

#### toBeGreaterThan() - "Debe ser mayor que"
```typescript
expect(10).toBeGreaterThan(5);        // ✅ Pasa
expect(3).toBeGreaterThan(5);         // ❌ Falla
```

#### toBeLessThan() - "Debe ser menor que"
```typescript
expect(5).toBeLessThan(10);           // ✅ Pasa
```

#### toContain() - "Debe contener"
```typescript
expect([1, 2, 3]).toContain(2);       // ✅ Pasa
expect('Hola Mundo').toContain('Mundo'); // ✅ Pasa
```

#### toBeDefined() - "Debe estar definido"
```typescript
let valor = 'algo';
expect(valor).toBeDefined();          // ✅ Pasa

let sinDefinir;
expect(sinDefinir).toBeDefined();     // ❌ Falla
```

---

## 🔄 6. BEFORE EACH (Antes de Cada Prueba)

### ¿Por qué usarlo?

A veces necesitas los mismos datos en varias pruebas. En lugar de repetir código, usa `beforeEach`.

### Ejemplo Sin beforeEach (❌ Repetitivo)

```typescript
describe('Producto', () => {
  it('debe tener nombre', () => {
    const producto = { nombre: 'Mouse', precio: 25000 };
    expect(producto.nombre).toBeDefined();
  });
  
  it('debe tener precio', () => {
    const producto = { nombre: 'Mouse', precio: 25000 }; // Repetido
    expect(producto.precio).toBeDefined();
  });
});
```

### Ejemplo Con beforeEach (✅ Mejor)

```typescript
describe('Producto', () => {
  let producto: any;
  
  beforeEach(() => {
    // Se ejecuta ANTES de cada prueba
    producto = { nombre: 'Mouse', precio: 25000 };
  });
  
  it('debe tener nombre', () => {
    expect(producto.nombre).toBeDefined();
  });
  
  it('debe tener precio', () => {
    expect(producto.precio).toBeDefined();
  });
});
```

**Ventaja**: No repites código y cada prueba empieza con datos limpios.

---

## 🕵️ 7. SPIES (ESPÍAS)

### ¿Qué son?

Los **spies** son funciones falsas que registran información sobre cómo fueron llamadas.

**Piensa en un spy como**: Una cámara de seguridad que registra:
- ¿Se llamó la función?
- ¿Con qué valores?
- ¿Cuántas veces?

### Ejemplo: Botón que llama una función

```typescript
describe('Botón Agregar al Carrito', () => {
  let mockOnClick: jasmine.Spy;
  
  beforeEach(() => {
    // Crear un spy (función falsa)
    mockOnClick = jasmine.createSpy('onClick');
  });
  
  it('debe llamar onClick cuando se hace click', () => {
    // Simular el click
    mockOnClick();
    
    // Verificar que se llamó
    expect(mockOnClick).toHaveBeenCalled();
  });
  
  it('debe pasar el ID del producto', () => {
    const productoId = 123;
    
    // Simular click con argumento
    mockOnClick(productoId);
    
    // Verificar que se llamó con el ID correcto
    expect(mockOnClick).toHaveBeenCalledWith(123);
  });
  
  it('debe contar cuántas veces se llamó', () => {
    mockOnClick();
    mockOnClick();
    mockOnClick();
    
    expect(mockOnClick).toHaveBeenCalledTimes(3);
  });
});
```

---

## 🛠️ 8. PROBANDO EL PROYECTO TIENDA-TECH

### Estructura del Proyecto

```
src/
  components/
    ProductCard.tsx          ← Componente
    ProductCard.spec.tsx     ← Pruebas del componente
```

### Ejemplo: Pruebas de ProductCard

```typescript
import { Product } from '../types/Product';

describe('ProductCard Component', () => {
  let mockProduct: Product;
  let mockOnAddToCart: jasmine.Spy;
  
  // Preparar datos antes de cada prueba
  beforeEach(() => {
    mockProduct = {
      id: 1,
      name: 'Notebook Gamer',
      price: 999990,
      image: 'test.jpg',
      category: 'Notebooks',
      description: 'Potente notebook',
      stock: 5
    };
    
    mockOnAddToCart = jasmine.createSpy('onAddToCart');
  });
  
  // Prueba 1: Verificar que el producto tiene nombre
  it('debe tener un nombre definido', () => {
    expect(mockProduct.name).toBeDefined();
    expect(mockProduct.name).toBe('Notebook Gamer');
  });
  
  // Prueba 2: Verificar que el precio es válido
  it('debe tener un precio mayor a cero', () => {
    expect(mockProduct.price).toBeGreaterThan(0);
  });
  
  // Prueba 3: Verificar el stock
  it('debe mostrar el stock disponible', () => {
    expect(mockProduct.stock).toBe(5);
  });
  
  // Prueba 4: Verificar stock bajo
  it('debe marcar stock bajo cuando es menor a 5', () => {
    const lowStockProduct = { ...mockProduct, stock: 3 };
    expect(lowStockProduct.stock).toBeLessThan(5);
  });
  
  // Prueba 5: Verificar callback
  it('debe llamar onAddToCart al agregar producto', () => {
    mockOnAddToCart(mockProduct);
    expect(mockOnAddToCart).toHaveBeenCalledWith(mockProduct);
  });
});
```

---

## 💪 9. EJERCICIOS PRÁCTICOS

### Ejercicio 1: Tu Primera Prueba (Fácil)

Crea una función `multiplicar` y escribe 3 pruebas:

```typescript
// 1. Escribe la función
function multiplicar(a: number, b: number): number {
  // TODO: Completa aquí
}

// 2. Escribe las pruebas
describe('Función multiplicar', () => {
  it('debe multiplicar dos números positivos', () => {
    // TODO: Completa aquí
  });
  
  it('debe retornar 0 cuando se multiplica por 0', () => {
    // TODO: Completa aquí
  });
  
  it('debe multiplicar números negativos', () => {
    // TODO: Completa aquí
  });
});
```

<details>
<summary>👉 Ver Solución</summary>

```typescript
function multiplicar(a: number, b: number): number {
  return a * b;
}

describe('Función multiplicar', () => {
  it('debe multiplicar dos números positivos', () => {
    expect(multiplicar(3, 4)).toBe(12);
  });
  
  it('debe retornar 0 cuando se multiplica por 0', () => {
    expect(multiplicar(5, 0)).toBe(0);
  });
  
  it('debe multiplicar números negativos', () => {
    expect(multiplicar(-2, -3)).toBe(6);
  });
});
```
</details>

---

### Ejercicio 2: Formatear Precio (Medio)

Crea una función que formatee precios chilenos y pruébala:

```typescript
function formatearPrecio(precio: number): string {
  // TODO: Retornar formato "$1.000" para 1000
}

describe('formatearPrecio', () => {
  it('debe agregar el símbolo $', () => {
    // TODO: Completa
  });
  
  it('debe usar punto como separador de miles', () => {
    // TODO: Completa
  });
});
```

<details>
<summary>👉 Ver Solución</summary>

```typescript
function formatearPrecio(precio: number): string {
  return `$${precio.toLocaleString('es-CL')}`;
}

describe('formatearPrecio', () => {
  it('debe agregar el símbolo $', () => {
    const resultado = formatearPrecio(1000);
    expect(resultado).toContain('$');
  });
  
  it('debe usar punto como separador de miles', () => {
    expect(formatearPrecio(1000)).toBe('$1.000');
    expect(formatearPrecio(50000)).toBe('$50.000');
  });
});
```
</details>

---

### Ejercicio 3: Validar Stock (Medio)

```typescript
function tieneStock(producto: Product): boolean {
  // TODO: Retornar true si el stock > 0
}

describe('tieneStock', () => {
  it('debe retornar true cuando hay stock', () => {
    // TODO: Completa
  });
  
  it('debe retornar false cuando no hay stock', () => {
    // TODO: Completa
  });
});
```

<details>
<summary>👉 Ver Solución</summary>

```typescript
function tieneStock(producto: Product): boolean {
  return producto.stock > 0;
}

describe('tieneStock', () => {
  it('debe retornar true cuando hay stock', () => {
    const producto = { stock: 5 } as Product;
    expect(tieneStock(producto)).toBe(true);
  });
  
  it('debe retornar false cuando no hay stock', () => {
    const producto = { stock: 0 } as Product;
    expect(tieneStock(producto)).toBe(false);
  });
});
```
</details>

---

### Ejercicio 4: Calcular Total del Carrito (Avanzado)

```typescript
interface CartItem {
  precio: number;
  cantidad: number;
}

function calcularTotal(items: CartItem[]): number {
  // TODO: Sumar precio * cantidad de todos los items
}

describe('calcularTotal', () => {
  it('debe calcular el total de un item', () => {
    // TODO: Completa
  });
  
  it('debe calcular el total de múltiples items', () => {
    // TODO: Completa
  });
  
  it('debe retornar 0 para carrito vacío', () => {
    // TODO: Completa
  });
});
```

<details>
<summary>👉 Ver Solución</summary>

```typescript
function calcularTotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + (item.precio * item.cantidad), 0);
}

describe('calcularTotal', () => {
  it('debe calcular el total de un item', () => {
    const items = [{ precio: 100, cantidad: 2 }];
    expect(calcularTotal(items)).toBe(200);
  });
  
  it('debe calcular el total de múltiples items', () => {
    const items = [
      { precio: 100, cantidad: 2 },
      { precio: 50, cantidad: 1 }
    ];
    expect(calcularTotal(items)).toBe(250);
  });
  
  it('debe retornar 0 para carrito vacío', () => {
    expect(calcularTotal([])).toBe(0);
  });
});
```
</details>

---

## 🚀 10. EJECUTAR LAS PRUEBAS

### Paso 1: Instalar Dependencias

```bash
cd tienda-tech-jasmine
npm install
```

### Paso 2: Ejecutar las Pruebas

```bash
npm test
```

Esto abrirá Chrome y verás los resultados de las pruebas.

### Interpretando los Resultados

**✅ Verde = Todas las pruebas pasaron**
```
✓ debe sumar dos números
✓ debe formatear el precio
✓ debe validar el stock
```

**❌ Rojo = Alguna prueba falló**
```
✗ debe multiplicar correctamente
  Expected 12 but got 11
```

---

## 📋 11. CHECKLIST DE BUENAS PRÁCTICAS

Al escribir pruebas, asegúrate de:

- [ ] Usar nombres descriptivos: `debe calcular el total correctamente`
- [ ] Una prueba, una cosa: No probar todo junto
- [ ] Usar beforeEach para datos repetidos
- [ ] Probar casos límite: números negativos, cero, arrays vacíos
- [ ] Usar el patrón AAA (Arrange-Act-Assert)
- [ ] Mantener pruebas independientes: Una no debe depender de otra

---

## 🎓 12. GLOSARIO DE TÉRMINOS

| Término | Significado | Ejemplo |
|---------|-------------|---------|
| **Test** | Prueba individual | `it('debe sumar', () => {})` |
| **Suite** | Grupo de pruebas | `describe('Calculadora', () => {})` |
| **Matcher** | Comparador | `toBe()`, `toEqual()` |
| **Spy** | Función falsa que registra llamadas | `jasmine.createSpy()` |
| **Mock** | Objeto simulado | Similar a spy |
| **Assertion** | Verificación | `expect(x).toBe(y)` |
| **AAA** | Arrange-Act-Assert | Patrón de estructura |
| **beforeEach** | Código que se ejecuta antes de cada prueba | Preparar datos |

---

## 🤔 13. PREGUNTAS FRECUENTES

### ¿Cuántas pruebas debo escribir?

**Respuesta**: Al menos una prueba por cada funcionalidad importante. Si una función hace 3 cosas diferentes, escribe al menos 3 pruebas.

### ¿Qué debo probar primero?

**Respuesta**: Empieza con la lógica más importante:
1. Funciones de cálculo (precios, totales)
2. Validaciones (stock, formularios)
3. Interacciones del usuario (clicks, cambios)

### ¿Todas las pruebas deben pasar?

**Sí**, todas las pruebas deben estar en verde (✅) antes de considerar que tu código está listo.

### ¿Qué hago si una prueba falla?

1. Lee el mensaje de error
2. Identifica qué esperaba la prueba
3. Verifica tu código
4. Corrige el error
5. Vuelve a ejecutar

---

## 📚 14. RECURSOS PARA APRENDER MÁS

### Documentación Oficial
- [Jasmine](https://jasmine.github.io/) - Framework de testing
- [Karma](https://karma-runner.github.io/) - Test runner

### Videos en Español
- Busca: "Pruebas unitarias JavaScript" en YouTube
- Busca: "Testing con Jasmine tutorial"

### Práctica
- Escribe pruebas para tus proyectos personales
- Participa en ejercicios de clase
- Revisa el código del proyecto `tienda-tech-jasmine`

---

## ✅ 15. AUTOEVALUACIÓN

Responde estas preguntas para verificar tu aprendizaje:

1. ¿Qué es una prueba unitaria?
2. ¿Cuál es la diferencia entre `toBe()` y `toEqual()`?
3. ¿Para qué sirve `beforeEach()`?
4. ¿Qué es un spy?
5. ¿Cuáles son las 3 partes del patrón AAA?

<details>
<summary>👉 Ver Respuestas</summary>

1. **Prueba unitaria**: Código que verifica que una función/componente funciona correctamente de forma aislada
2. **toBe vs toEqual**: `toBe()` compara valores simples, `toEqual()` compara el contenido de objetos/arrays
3. **beforeEach**: Ejecuta código antes de cada prueba para preparar datos
4. **Spy**: Función falsa que registra cómo fue llamada
5. **AAA**: Arrange (preparar), Act (actuar), Assert (verificar)
</details>

---

## 🎯 TU PRÓXIMO PASO

1. ✅ Lee esta guía completa
2. ✅ Prueba los ejemplos en el proyecto
3. ✅ Completa los ejercicios
4. ✅ Escribe tus propias pruebas
5. ✅ Pregunta a tu profesor si tienes dudas

**¡Recuerda!**: Escribir pruebas es una habilidad que se desarrolla con la práctica. No te desanimes si al principio parece difícil. ¡Sigue practicando! 💪

---

**✨ ¡Mucho éxito en tu aprendizaje de testing!**
