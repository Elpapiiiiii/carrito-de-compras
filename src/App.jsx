import Navbar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import Error from "./components/Error.jsx";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar setSearch={setSearch} />

      <main className="container my-4">
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                greeting="Bienvenidos a El Papi Shop"
                search={search}
              />
            }
          />

          <Route
            path="/category/:categoryId"
            element={
              <ItemListContainer
                greeting="Productos por categoría"
                search={search}
              />
            }
          />

          <Route path="/item/:itemId" element={<ItemDetailContainer />} />

          <Route path="/cart" element={<Cart />} />

          {/* ✅ ACÁ */}
          <Route path="/checkout" element={<Checkout />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
