import { useState } from "react";

const ItemCount = ({ stock = 5, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const sumar = () => count < stock && setCount(count + 1);
  const restar = () => count > 1 && setCount(count - 1);

  return (
    <div className="mt-3">
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
        className="btn btn-primary mt-3 w-100"
        onClick={() => onAdd?.(count)}
        disabled={stock <= 0}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
