import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";
import Loader from "./Loader.jsx";
import { getProductsFS } from "../firebase/firestoreServices";

export default function ItemListContainer({ greeting, search }) {
  const { categoryId } = useParams();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      setLoading(true);
      setErrorMsg("");

      try {
        const data = await getProductsFS(categoryId);
        if (!isMounted) return;

        const s = (search || "").toLowerCase().trim();

        const filtered = s
          ? data.filter((p) =>
              `${p.title} ${p.description || ""}`.toLowerCase().includes(s)
            )
          : data;

        setItems(filtered);
      } catch (error) {
        console.error(error);
        if (!isMounted) return;
        setErrorMsg("Hubo un error cargando los productos.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, [categoryId, search]);

  if (loading) return <Loader />;
  if (errorMsg) return <p>{errorMsg}</p>;
  if (items.length === 0) return <p>No se encontraron productos.</p>;

  return (
    <div>
      {greeting && <h2 className="mb-3">{greeting}</h2>}
      <ItemList items={items} />
    </div>
  );
}
