import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";

const Navbar = ({ setSearch }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        {/* BRAND – lleva a HOME */}
        <Link className="navbar-brand fw-bold" to="/">
          El Papi Shop
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* CATEGORÍAS */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/notebooks">
                Notebooks
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/perifericos">
                Periféricos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/celulares">
                Celulares
              </NavLink>
            </li>
          </ul>

          {/* BUSCADOR */}
          <form className="d-flex me-3" role="search">
            <input
              type="search"
              className="form-control"
              placeholder="Buscar producto..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>

          {/* WIDGET DEL CARRITO */}
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
