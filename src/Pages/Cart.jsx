import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="text-center">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Volver al home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-3">Carrito</h2>

      <div className="list-group">
        {cart.map((p) => (
          <div
            key={p.id}
            className="list-group-item d-flex align-items-center justify-content-between"
          >
            <div className="d-flex align-items-center gap-3">
              <img
                src={p.image}
                alt={p.title}
                style={{ width: 60, height: 60, objectFit: "cover" }}
              />
              <div>
                <div className="fw-bold">{p.title}</div>
                <div>Cant: {p.quantity}</div>
                <div>$ {p.price} c/u</div>
              </div>
            </div>

            <div className="text-end">
              <div className="fw-bold">$ {p.price * p.quantity}</div>
              <button
                className="btn btn-outline-danger btn-sm mt-2"
                onClick={() => removeItem(p.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between align-items-center mt-4">
        <button className="btn btn-danger" onClick={clearCart}>
          Vaciar carrito
        </button>

        <div className="text-end">
          <div className="fs-4 fw-bold">Total: $ {totalPrice}</div>
          <Link to="/checkout" className="btn btn-success mt-2">
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  );
}
