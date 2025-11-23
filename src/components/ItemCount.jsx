import { useState } from "react";

const ItemCount = ({ stock = 5, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="d-flex gap-3 align-items-center mt-3">
      <button className="btn btn-danger" onClick={restar}>
        -
      </button>

      <span className="fs-4">{count}</span>

      <button className="btn btn-success" onClick={sumar}>
        +
      </button>
    </div>
  );
};

export default ItemCount;
