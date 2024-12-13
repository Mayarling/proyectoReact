import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import "./Header.css"

const Header = () => (
  <header className="App-header">
    <div className="App-header-content">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Reserva Comunal</h1>
    </div>
    <p>"Tu salón comunal a un clic de distancia"</p>
    <nav className="App-menu">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/eventos">Eventos Comunitarios</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;


{/*import logo from '../logo.png';

const Header = () => (
    <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Reserva Comunal</h1>
        <p>"Tu salón comunal a un clic de distancia"</p>
    </header>
);

export default Header;*/}