import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";
import { createOrderFS } from "../firebase/firestoreServices.js";

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [buyer, setBuyer] = useState({ name: "", phone: "", email: "" });
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      setLoading(true);

      const order = {
        buyer,
        items: cart,
        total: totalPrice,
      };

      const id = await createOrderFS(order);
      setOrderId(id);
      clearCart();
    } catch (err) {
      console.error(err);
      setErrorMsg("Error creando la orden. Probá de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div className="text-center">
        <h2>¡Compra realizada!</h2>
        <p>
          Tu ID de orden es: <b>{orderId}</b>
        </p>
        <Link to="/" className="btn btn-primary">
          Volver al home
        </Link>
      </div>
    );
  }

  if (!cart || cart.length === 0) {
    return (
      <div className="text-center">
        <h2>No tenés productos para comprar</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Ir al home
        </Link>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col-md-6">
        <h2 className="mb-3">Checkout</h2>

        {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

        <form onSubmit={handleSubmit} className="d-flex flex-column gap-2">
          <input
            className="form-control"
            name="name"
            placeholder="Nombre"
            value={buyer.name}
            onChange={handleChange}
            required
          />
          <input
            className="form-control"
            name="phone"
            placeholder="Teléfono"
            value={buyer.phone}
            onChange={handleChange}
            required
          />
          <input
            className="form-control"
            name="email"
            placeholder="Email"
            value={buyer.email}
            onChange={handleChange}
            required
          />

          <button className="btn btn-success mt-2" type="submit" disabled={loading}>
            {loading ? "Generando orden..." : `Confirmar compra ($ ${totalPrice})`}
          </button>
        </form>
      </div>

      <div className="col-md-6">
        <h4>Resumen</h4>
        <ul className="list-group">
          {cart.map((p) => (
            <li
              key={p.id}
              className="list-group-item d-flex justify-content-between"
            >
              <span>
                {p.title} x {p.quantity}
              </span>
              <b>$ {p.price * p.quantity}</b>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
