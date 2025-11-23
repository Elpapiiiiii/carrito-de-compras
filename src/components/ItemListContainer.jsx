import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../data/products.js";
import ItemList from "./ItemList.jsx";

const ItemListContainer = ({ greeting, search }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getProducts()
      .then((res) => {
        let filtered = res;

        // Filtrar por categoría si existe
        if (categoryId) {
          filtered = filtered.filter(
            (prod) => prod.category === categoryId
          );
        }

        // Filtrar por búsqueda si hay texto
        if (search && search.trim() !== "") {
          filtered = filtered.filter((prod) =>
            prod.title.toLowerCase().includes(search.toLowerCase())
          );
        }

        setItems(filtered);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [categoryId, search]);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Ocurrió un error: {error}</p>;
  if (!items.length) return <p>No se encontraron productos.</p>;

  return (
    <div>
      <h1 className="mb-4">{greeting}</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
