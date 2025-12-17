import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeItem, clearCart, getTotalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container mt-4">
        <h2>Carrito</h2>
        <p>Tu carrito está vacío.</p>
        <Link to="/" className="btn btn-primary">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Carrito</h2>

      <div className="list-group mt-3">
        {cart.map((p) => (
          <div key={p.id} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex gap-3 align-items-center">
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{ width: 70, height: 70, objectFit: "cover" }}
                    className="rounded"
                  />
                )}
                <div>
                  <h5 className="mb-1">{p.title}</h5>
                  <p className="mb-1 text-muted">
                    ${p.price} x {p.quantity}
                  </p>
                  <p className="mb-0 fw-bold">
                    Subtotal: ${p.price * p.quantity}
                  </p>
                </div>
              </div>

              <button className="btn btn-outline-danger" onClick={() => removeItem(p.id)}>
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
          <p className="fs-4 fw-bold mb-2">Total: ${getTotalPrice()}</p>
          <Link to="/checkout" className="btn btn-success">
            Ir a pagar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
