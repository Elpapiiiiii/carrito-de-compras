import { useState } from "react";

const CheckoutForm = ({ onConfirm, loading }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !phone || !email || !email2) {
      setError("Completá todos los campos.");
      return;
    }

    if (email !== email2) {
      setError("Los emails no coinciden.");
      return;
    }

    onConfirm({ name, phone, email });
  };

  return (
    <form className="card p-3" onSubmit={handleSubmit}>
      <h3 className="mb-3">Datos del comprador</h3>

      {error && <p className="text-danger fw-bold">{error}</p>}

      <div className="mb-2">
        <label className="form-label">Nombre</label>
        <input
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tu nombre"
        />
      </div>

      <div className="mb-2">
        <label className="form-label">Teléfono</label>
        <input
          className="form-control"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Tu teléfono"
        />
      </div>

      <div className="mb-2">
        <label className="form-label">Email</label>
        <input
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Repetir email</label>
        <input
          className="form-control"
          value={email2}
          onChange={(e) => setEmail2(e.target.value)}
          placeholder="tu@email.com"
        />
      </div>

      <button className="btn btn-success" disabled={loading}>
        {loading ? "Procesando..." : "Confirmar compra"}
      </button>
    </form>
  );
};

export default CheckoutForm;
