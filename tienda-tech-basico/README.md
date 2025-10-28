# 🛒 Tienda Tech - Proyecto Base para Practicar Testing

Este es un proyecto básico de una tienda online de tecnología **SIN pruebas unitarias**. El objetivo es que practiques agregando pruebas desde cero usando Jasmine y Karma.

## 📋 Contenido del Proyecto

### Componentes Implementados
- ✅ **Header**: Encabezado con logo y botón de carrito
- ✅ **ProductCard**: Tarjeta de producto con imagen, precio y botón
- ✅ **ProductList**: Lista de productos en grid
- ✅ **ShoppingCart**: Carrito lateral deslizable

### Funcionalidades
- ✅ Ver lista de productos
- ✅ Agregar productos al carrito
- ✅ Modificar cantidades
- ✅ Eliminar productos del carrito
- ✅ Calcular total
- ✅ Validación de stock

### Utilidades
- ✅ `formatPrice`: Formatea precios en formato chileno
- ✅ Tipos TypeScript definidos
- ✅ Datos mock de productos

---

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]

# Entrar al directorio
cd tienda-tech-basico

# Instalar dependencias
npm install

# Iniciar la aplicación
npm start
```

La aplicación se abrirá en `http://localhost:3000`

---

## 🧪 Tu Misión: Agregar Testing

Este proyecto NO tiene pruebas. Tu objetivo es agregarlas desde cero siguiendo la guía.

### 📚 Consulta la Guía Completa

Revisa el archivo **`GUIA_AGREGAR_TESTING.md`** que contiene instrucciones paso a paso de cómo:

1. Instalar Jasmine y Karma
2. Configurar el entorno de testing
3. Escribir tus primeras pruebas
4. Probar componentes React
5. Usar spies y mocks
6. Ejecutar las pruebas

---

## 📁 Estructura del Proyecto

```
tienda-tech-basico/
├── public/
│   └── index.html
├── src/
│   ├── components/          # Componentes React
│   │   ├── Header.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductList.tsx
│   │   └── ShoppingCart.tsx
│   ├── types/              # Tipos TypeScript
│   │   └── Product.ts
│   ├── data/               # Datos mock
│   │   └── products.ts
│   ├── utils/              # Funciones utilitarias
│   │   └── formatPrice.ts
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
├── README.md
└── GUIA_AGREGAR_TESTING.md  # 👈 ¡EMPIEZA AQUÍ!
```

---

## 🎯 Archivos que Deberías Probar

### Prioridad Alta (Empezar por aquí)
1. `utils/formatPrice.ts` - Función simple, perfecta para comenzar
2. `components/ProductCard.tsx` - Componente con props y eventos
3. `App.tsx` - Lógica del carrito

### Prioridad Media
4. `components/Header.tsx` - Props simples
5. `components/ProductList.tsx` - Renderizado de listas
6. `components/ShoppingCart.tsx` - Componente complejo

---

## 💡 Consejos

- ✅ Empieza con funciones simples antes de componentes complejos
- ✅ Usa la metodología TDD (Red-Green-Refactor)
- ✅ Escribe pruebas descriptivas
- ✅ Prueba casos límite (edge cases)
- ✅ Un concepto por prueba
- ✅ Usa `beforeEach` para setup común

---

## 🛠️ Tecnologías

- React 18.2.0
- TypeScript 4.9.5
- React Scripts 5.0.1

---

## 📞 Ayuda

Si tienes dudas:
1. Revisa `GUIA_AGREGAR_TESTING.md`
2. Consulta los ejemplos en la guía
3. Pregunta a tu profesor

---

**¡Éxito con las pruebas!** 🚀
