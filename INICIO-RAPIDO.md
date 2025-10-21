# 📘 GUÍA RÁPIDA - Portfolio Starter

## ⚡ Inicio Rápido (3 pasos)

### 1️⃣ Instalar Dependencias
```bash
npm install
```

### 2️⃣ Iniciar Proyecto
```bash
npm start
```

### 3️⃣ Personalizar
1. Edita `src/data/profile.json` con tus datos
2. Edita `src/data/projects.json` con tus proyectos
3. Cambia colores en `src/styles/App.css`

---

## 📝 Cambiar Tus Datos

### Editar Profile (src/data/profile.json)
```json
{
  "nombre": "TU NOMBRE",
  "titulo": "TU TÍTULO",
  "descripcion": "TU DESCRIPCIÓN",
  "email": "TU@EMAIL.COM",
  "github": "https://github.com/TU-USUARIO",
  "linkedin": "https://linkedin.com/in/TU-USUARIO"
}
```

### Agregar Proyectos (src/data/projects.json)
```json
{
  "id": 1,
  "titulo": "Nombre Proyecto",
  "descripcion": "Descripción breve",
  "imagen": "https://via.placeholder.com/400x300",
  "tecnologias": ["React", "TypeScript"],
  "repositorio": "https://github.com/usuario/repo",
  "fecha": "2024-10-20"
}
```

---

## 🎨 Cambiar Colores

Edita `src/styles/App.css`:

```css
:root {
  --color-primary: #2563eb;     /* Color principal */
  --color-secondary: #7c3aed;   /* Color secundario */
}
```

### Paletas Sugeridas:

**Azul Moderno:**
```css
--color-primary: #2563eb;
--color-secondary: #7c3aed;
```

**Verde Tech:**
```css
--color-primary: #10b981;
--color-secondary: #06b6d4;
```

**Rojo Audaz:**
```css
--color-primary: #dc2626;
--color-secondary: #f59e0b;
```

---

## 🛠️ Comandos Útiles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia el servidor (puerto 3000) |
| `npm run build` | Crea versión para producción |
| `npm test` | Ejecuta las pruebas |

---

## 📁 Archivos Importantes

| Archivo | Qué hace |
|---------|----------|
| `src/App.tsx` | Componente principal |
| `src/data/profile.json` | Tus datos personales |
| `src/data/projects.json` | Lista de proyectos |
| `src/components/Hero.tsx` | Sección de bienvenida |
| `src/components/Projects.tsx` | Grilla de proyectos |
| `src/styles/App.css` | Estilos globales |

---

## ❓ Preguntas Frecuentes

**¿Cómo cambio el título de la página?**
- Edita `public/index.html`, línea `<title>`

**¿Cómo agrego más proyectos?**
- Agrega más objetos al array en `src/data/projects.json`

**¿Cómo cambio las imágenes?**
- Cambia las URLs en `projects.json`
- O guarda imágenes en `public/images/` y usa `/images/foto.jpg`

**¿Qué es TypeScript?**
- JavaScript con tipos (más seguro)
- Revisa la guía completa en `guia-full/`

---

## 🚨 Errores Comunes

**Error: Cannot find module 'bootstrap'**
```bash
npm install bootstrap react-bootstrap
```

**Error: Puerto 3000 en uso**
- Cierra otros proyectos React
- O usa: `PORT=3001 npm start`

**Error de sintaxis en JSON**
- Revisa que no tengas comas finales
- Usa comillas dobles `"` no simples `'`
- Valida en: https://jsonlint.com/

---

## ✅ Checklist de Personalización

- [ ] Cambié mi nombre en `profile.json`
- [ ] Agregué mi email y redes sociales
- [ ] Agregué al menos 3 proyectos
- [ ] Cambié los colores en `App.css`
- [ ] El proyecto corre sin errores con `npm start`
- [ ] Revisé que todos los links funcionen

---

## 📚 Recursos

- [Guías Completas](./guia-full/README.md) - Tutoriales paso a paso
- [React Docs](https://react.dev/) - Documentación oficial
- [Bootstrap](https://getbootstrap.com/) - Componentes UI

---

<div align="center">

**¿Listo? Ejecuta `npm start` y empieza a personalizar! 🚀**

**Creado por: Profesor Sting Adams - Duoc UC 2025**

</div>
