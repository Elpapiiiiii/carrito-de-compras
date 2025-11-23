import Navbar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Error from "./components/Error.jsx";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      {/* Le pasamos setSearch al Navbar */}
      <Navbar setSearch={setSearch} />

      <main className="container my-4">
        <Routes>
          {/* HOME */}
          <Route
            path="/"
            element={
              <ItemListContainer
                greeting="Bienvenidos a El Papi Shop"
                search={search}
              />
            }
          />

          {/* CATEGORÍAS */}
          <Route
            path="/category/:categoryId"
            element={
              <ItemListContainer
                greeting="Productos por categoría"
                search={search}
              />
            }
          />

          {/* DETALLE PRODUCTO */}
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />

          {/* RUTA NO ENCONTRADA */}
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
