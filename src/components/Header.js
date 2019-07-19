import React from "react";

import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/productos">Diario Garita </Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              to="/ingreso/visita"
              className="nav-link"
              activeClassName="active"
            >
              Ingreso
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/salida/visita"
              className="nav-link"
              activeClassName="active"
            >
              Salida
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/listar/visita"
              className="nav-link"
              activeClassName="active"
            >
              Visitas
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
