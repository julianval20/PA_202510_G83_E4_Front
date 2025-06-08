// src/Components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Images/logo.png";
import iniciarSesion from "../Images/iniciarsesion.png";
import carrito from "../Images/Carrito.png";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Kapchy Market Logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li><Link to="/tienda">TIENDA</Link></li>
          <li><Link to="/productores">PRODUCTORES</Link></li>
          <li><a href="#">¿QUIÉNES SOMOS?</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={iniciarSesion} alt="Iniciar Sesión" className="icono-user" />
        <Link to="#">Iniciar Sesión</Link>
        <Link to="/registro">Registrarse</Link>
        <Link to="#">
          <img src={carrito} alt="Carrito de Compras" className="icono-carrito" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
