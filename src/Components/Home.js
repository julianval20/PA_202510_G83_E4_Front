// src/Components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl"; // 👈 Importar FormattedMessage
import artesanos from "../Images/artesanos.png";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="home-left">
        <div className="circulo-decorativo"></div>
        <img src={artesanos} alt="Artesanos" className="artesanos-img" />
      </div>

      <div className="home-right">
        <h2>
          <FormattedMessage id="home.title" />{" "}
          <strong>Kapchy Market</strong>
        </h2>
        <p>
          <FormattedMessage id="home.subtitle" />
        </p>
        <p>
          <FormattedMessage id="home.description" />
        </p>
        <div className="btns-container">
          <Link to="/tienda" className="btn-compra">
            <FormattedMessage id="home.button.products" />
          </Link>
          <button className="btn-compra">
            <FormattedMessage id="home.button.sell" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
