# El Papi Shop 🛒

Proyecto de e-commerce desarrollado como **Proyecto Final del curso de React en Coderhouse**.

La aplicación está construida con **React + Vite**, implementa navegación SPA con **React Router DOM**, manejo de estado global mediante **Context API**, consumo de datos desde **Firebase Firestore** y se encuentra **deployada en GitHub Pages**.

---

## 🚀 Tecnologías utilizadas

- React
- Vite
- React Router DOM
- Context API
- Firebase (Firestore)
- JavaScript (ES6+)
- Bootstrap 5 (CDN)
- Git & GitHub

---

## 🌍 Deploy

👉 https://elpapiiiiii.github.io/carrito-de-compras/

⚠️ **Nota:**  
La aplicación utiliza **HashRouter** para compatibilidad con GitHub Pages.  
Las rutas se acceden con `#/` (ej: `#/cart`, `#/checkout`).

---

## 🛍️ Funcionalidades principales

- Listado dinámico de productos desde Firestore
- Filtrado por categorías
- Búsqueda de productos
- Vista de detalle de producto
- Carrito de compras con Context API
- Control de stock
- Checkout con generación de órdenes en Firestore
- Renderizado condicional (loader, carrito vacío, sin stock)
- Navegación SPA sin recarga
- Deploy en hosting gratuito (GitHub Pages)

---

## 🔥 Firebase

- Colección **products** → productos
- Colección **orders** → órdenes de compra generadas en el checkout

Cada orden guarda:
- Datos del comprador
- Items comprados
- Total
- Fecha de creación

---

## 📂 Estructura principal

### `src/main.jsx`
Configura el **HashRouter** (compatible con GitHub Pages) y renderiza el componente `<App />`, envolviendo la aplicación con el `CartProvider`.

---

### `src/App.jsx`
Define las rutas principales de la aplicación:

- `/` → listado de productos
- `/category/:categoryId` → productos filtrados por categoría
- `/item/:itemId` → detalle del producto
- `/cart` → carrito de compras
- `/checkout` → formulario de compra
- `*` → página de error (404)

---

### `src/components/Navbar.jsx`
Barra de navegación que incluye:
- Logo con acceso al home
- Navegación por categorías
- Buscador de productos
- `CartWidget` con cantidad total de productos

---

### `src/components/ItemListContainer.jsx`
- Obtiene los productos desde **Firestore**
- Maneja asincronía con `useEffect`
- Filtra por categoría y búsqueda
- Pasa los datos al componente `ItemList`

---

### `src/components/ItemDetailContainer.jsx`
- Obtiene el producto por `id` desde Firestore
- Maneja estados de carga
- Pasa la información a `ItemDetail`

---

### `src/context/CartContext.jsx`
- Maneja el estado global del carrito
- Permite agregar, eliminar y vaciar productos
- Calcula cantidades totales y precios

---

## ▶️ Instalación y uso

```bash
npm install
npm run dev
