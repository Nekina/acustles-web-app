import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
    <a href="/" className="navbar-brand mb-0 h1">
        <img className="d-inline-block align-center" alt="logo" src={logo} width="60"/>
    </a>
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
        <li className="nav-item active">
            <Link to="/" className="nav-link">
            Home
            </Link>
        </li>
        <li className="nav-item active">
            <Link to="/letters" className="nav-link">
            Letters
            </Link>
        </li>
        <li className="nav-item active">
            <Link to="/aboutus" className="nav-link">
            About Us
            </Link>
        </li>
        </ul>
    </div>
    </nav>
  );
}

export default Nav;
