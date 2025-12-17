import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { getTotalUnits } = useContext(CartContext);
  const totalUnits = getTotalUnits();

  return (
    <Link to="/cart" className="position-relative text-decoration-none">
      🛒
      {totalUnits > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalUnits}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;
