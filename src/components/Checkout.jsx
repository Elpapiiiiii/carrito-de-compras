import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CheckoutForm from "./CheckoutForm";
import { createOrderFS } from "../firebase/firestoreServices";

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState("");

  if (cart.length === 0 && !orderId) return <Navigate to="/" replace />;

  const handleConfirm = async (buyer) => {
    setLoading(true);
    setError("");

    try {
      const order = {
        buyer,
        items: cart.map((p) => ({
          id: p.id,
          title: p.title,
          price: p.price,
          quantity: p.quantity,
        })),
        total: getTotalPrice(),
      };

      const id = await createOrderFS(order);
      setOrderId(id);
      clearCart();
    } catch (err) {
      console.error(err);
      setError("No se pudo generar la orden. Intentá nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div className="container mt-4">
        <h2>¡Compra confirmada! ✅</h2>
        <p className="mt-3">
          Tu número de orden es: <span className="fw-bold">{orderId}</span>
        </p>

        <Link to="/" className="btn btn-primary mt-2">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Checkout</h2>

      <div className="mt-3">
        <h5>Resumen</h5>
        <ul className="list-group mb-3">
          {cart.map((p) => (
            <li key={p.id} className="list-group-item d-flex justify-content-between">
              <span>
                {p.title} x {p.quantity}
              </span>
              <span className="fw-bold">${p.price * p.quantity}</span>
            </li>
          ))}
          <li className="list-group-item d-flex justify-content-between">
            <span className="fw-bold">Total</span>
            <span className="fw-bold">${getTotalPrice()}</span>
          </li>
        </ul>

        {error && <p className="text-danger fw-bold">{error}</p>}

        <CheckoutForm onConfirm={handleConfirm} loading={loading} />
      </div>
    </div>
  );
};

export default Checkout;
