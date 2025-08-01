import { NavLink } from "react-router-dom";
import logo from "./assets/logo.jpg";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <NavLink to="/" className="navbar-brand mb-0 h1">
            <img className="d-inline-block align-center" alt="logo" src={logo} width="60"/>
        </NavLink>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle Navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/" end className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/letters" className="nav-link">Letters</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/aboutus" className="nav-link">About Us</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/orders" className="nav-link">Orders</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Nav;
