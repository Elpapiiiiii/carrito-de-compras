import { FaShoppingCart } from "react-icons/fa";
import "../css/Navbar.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";

function CartWidget() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="cartwidget text-decoration-none">
      <FaShoppingCart className="cartwidget__icon" />
      <span className="cartwidget__badge">{totalQuantity}</span>
    </Link>
  );
}

export default CartWidget;
