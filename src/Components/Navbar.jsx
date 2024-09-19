import { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Vela
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/Sobre_mi">Sobre mi</NavLink>
        </li>
        <li>
          <NavLink to="/Personajes">Personajes</NavLink>
        </li>
        <li>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;