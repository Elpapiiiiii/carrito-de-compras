import { useState } from "react";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const restar = () => {
    if (count > 1) setCount(count - 1);
  };

  const sumar = () => {
    if (count < stock) setCount(count + 1);
  };

  return (
    <div className="d-flex flex-column gap-2">
      <div className="d-flex gap-3 align-items-center">
        <button className="btn btn-danger" onClick={restar}>
          -
        </button>

        <span className="fs-4">{count}</span>

        <button className="btn btn-success" onClick={sumar}>
          +
        </button>
      </div>

      <button
        className="btn btn-primary"
        disabled={stock <= 0}
        onClick={() => onAdd(count)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
