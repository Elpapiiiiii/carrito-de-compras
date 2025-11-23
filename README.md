# El Papi Shop 🛒

Proyecto de e-commerce realizado como **Segunda Pre-entrega de React** (Coderhouse).  
La app está desarrollada con **React + Vite** e implementa navegación con **React Router DOM** y manejo de asincronía mediante promesas simuladas.

---

## 🚀 Tecnologías utilizadas

- React
- Vite
- React Router DOM
- JavaScript (ES6+)
- Bootstrap 5 (CDN) para estilos básicos

---

## 📂 Estructura principal

- `src/main.jsx`  
  Configura el `BrowserRouter` y renderiza el componente `<App />`.

- `src/App.jsx`  
  Define las rutas de la aplicación:
  - `/` → listado de productos
  - `/category/:categoryId` → productos filtrados por categoría
  - `/item/:itemId` → detalle de producto
  - `*` → página de error (404)

- `src/components/Navbar.jsx`  
  Barra de navegación con:
  - Logo que redirige al home
  - Links a categorías (`Notebooks`, `Periféricos`, `Celulares`)
  - Buscador de productos
  - `CartWidget` con icono de carrito

- `src/components/ItemListContainer.jsx`  
  - Consume una **promesa** (`getProducts`) dentro de un `useEffect`.
  - Usa `useParams` para leer la categoría de la URL.
  - Filtra por categoría y por texto de búsqueda.
  - Pasa el listado a `ItemList`.

- `src/components/ItemList.jsx`  
  - Recorre el array de productos con `.map()`.
  - Renderiza un componente `Item` por cada producto.
  - Usa `key` única (`product.id`).

- `src/components/Item.jsx`  
  - Muestra la info básica del producto en una card.
  - Incluye un botón/enlace **"Ver detalle"** que navega a `/item/:id`.

- `src/components/ItemDetailContainer.jsx`  
  - Usa `useParams` para leer el `id` del producto.
  - Maneja una promesa (`getProductById`) dentro de un `useEffect`.
  - Guarda la respuesta en un estado y se lo pasa a `ItemDetail`.

- `src/components/ItemDetail.jsx`  
  - Muestra el detalle del producto (imagen, descripción, precio, categoría, stock).
  - Incluye el componente `ItemCount` y un botón **"Agregar al carrito"** (vista preliminar).

- `src/components/ItemCount.jsx`  
  - Contador que:
    - No baja de 1.
    - No supera el stock disponible.
  - Implementado con `useState`.

- `src/data/products.js`  
  - Array de productos de ejemplo.
  - Dos funciones que simulan asincronía:
    - `getProducts()` → devuelve todo el listado.
    - `getProductById(id)` → devuelve un producto por id.

---

## 🧠 Funcionalidades solicitadas en la pre-entrega 2

- Configuración de **React Router DOM** con rutas dinámicas.
- Navegación desde el **Navbar**:
  - Logo → Home
  - Categorías → filtrado por categoría.
- Manejo de **promesas** utilizando `useEffect` y estados.
- Uso de `useParams` para:
  - Filtrar productos por categoría.
  - Obtener el id del producto para el detalle.
- Renderizado de listas con `.map()` y uso de `key` única.
- Componente `ItemDetail` que recibe los datos desde su contenedor.
- Componente opcional `ItemCount` funcionando correctamente.

---
