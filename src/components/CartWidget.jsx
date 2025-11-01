import { FaShoppingCart } from "react-icons/fa";
import "../css/Navbar.css";

function CartWidget() {
  const itemCount = 16; // harcodeado como el ejemplo

  return (
    <div className="cartwidget">
      <FaShoppingCart className="cartwidget__icon" />
      <span className="cartwidget__badge">{itemCount}</span>
    </div>
  );
}

export default CartWidget;