import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.jsx";
import { getProductByIdFS } from "../firebase/firestoreServices";

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);
        setError(null);

        const data = await getProductByIdFS(itemId);

        if (!data) {
          setError("Producto no encontrado");
          setProduct(null);
          return;
        }

        setProduct(data);
      } catch (err) {
        console.error(err);
        setError("Error cargando producto");
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [itemId]);

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
