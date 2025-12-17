import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount.jsx";

const ItemDetail = ({ product }) => {
  const { title, description, price, image, stock, category } = product;

  const { addItem } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAdd = (qty) => {
    addItem(product, qty);
    setAdded(true);
  };

  return (
    <div className="card shadow-sm p-3">
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={image}
            alt={title}
            className="img-fluid rounded-start h-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="col-md-7 d-flex flex-column justify-content-center">
          <div className="card-body">
            <h2 className="card-title mb-3">{title}</h2>
            <p className="text-muted mb-1">Categoría: {category}</p>
            <p className="card-text">{description}</p>

            <p className="fs-3 fw-bold mt-3 mb-1">$ {price}</p>
            <p className="text-success mb-3">Stock disponible: {stock}</p>

            {stock <= 0 ? (
              <p className="text-danger fw-bold">Producto sin stock</p>
            ) : added ? (
              <div className="d-flex gap-2">
                <Link to="/cart" className="btn btn-success w-100">
                  Ir al carrito
                </Link>
                <Link to="/" className="btn btn-outline-secondary w-100">
                  Seguir comprando
                </Link>
              </div>
            ) : (
              <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
