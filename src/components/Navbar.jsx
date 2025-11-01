import CartWidget from "./CartWidget";
import "../css/Navbar.css";
import logo from "../assets/logo-papi.png"; // 👈 tu logo

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={logo} alt="El Papi Shop" />
        </div>

        <nav className="navbar__links">
          <a href="#">Inicio</a>
          <a href="#">Nosotros</a>
          <a href="#">Servicios</a>
          <a href="#">Contacto</a>
        </nav>

        <CartWidget />
      </div>
    </header>
  );
}

export default Navbar;