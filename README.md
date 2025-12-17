# El Papi Shop 🛒

<<<<<<< HEAD
Proyecto de e-commerce desarrollado como **Proyecto Final del curso de React en Coderhouse**.

La aplicación está construida con **React + Vite**, implementa navegación SPA con **React Router DOM**, manejo de estado global mediante **Context**, consumo de datos desde **Firebase Firestore** y se encuentra **deployada en GitHub Pages**.

---

## 🚀 Tecnologías utilizadas

- React
- Vite
- React Router DOM
- Firebase (Firestore)
- JavaScript (ES6+)
- Bootstrap 5 (CDN)
- Git & GitHub

---

## 🌍 Deploy

👉 https://elpapiiiiii.github.io/carrito-de-compras/

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

### `src/components/ItemList.jsx`
- Renderiza el listado de productos usando `.map()`
- Utiliza `key` única por producto

---

### `src/components/ItemDetailContainer.jsx`
- Obtiene el producto por `id` desde Firestore
- Maneja estados de carga
- Pasa la información a `ItemDetail`

---

### `src/components/ItemDetail.jsx`
- Muestra información detallada del producto
- Integra el componente `ItemCount`
- Permite agregar productos al carrito

---

### `src/components/ItemCount.jsx`
Contador de unidades que:
- No permite valores menores a 1
- Respeta el stock disponible
- Está implementado con `useState`

---

### `src/context/CartContext.jsx`
- Maneja el estado global del carrito
- Permite agregar, eliminar y vaciar productos
- Calcula cantidades totales y precios

---

## 🛒 Funcionalidades principales

- Listado y detalle de productos
- Filtrado por categorías
- Carrito de compras con Context
- Control de stock
- Checkout con generación de orden en Firestore
- Navegación SPA sin recarga
- Deploy en hosting gratuito

---

=======
E-commerce desarrollado como Single Page Application (SPA) utilizando React.

## 🚀 Tecnologías utilizadas
- React
- React Router DOM
- Context API
- Firebase (Firestore)
- Bootstrap

## 🛍️ Funcionalidades
- Listado dinámico de productos desde Firestore
- Filtrado por categorías
- Vista de detalle de producto
- Carrito de compras con Context
- Checkout con generación de órdenes en Firestore
- Renderizado condicional (loader, carrito vacío, sin stock)

## 🔥 Firebase
- Colección `products` para productos
- Colección `orders` para órdenes de compra

## ▶️ Instalación
```bash
npm install
npm run dev
>>>>>>> 5972369 (proyecto final react coder)
