import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/banner.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${banner})` }}>
      <div className="headerContainer">
        <h1> Natural Tienda </h1>
        <p> Alimentos naturales a un click</p>
        <Link to="/products">
          <button> Ver Productos </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
