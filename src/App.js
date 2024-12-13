import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import FormularioReserva from "./Components/FormularioReserva";
import ConfirmacionReserva from "./Components/ConfirmacionReserva";
import ReglasDeUso from "./Components/ReglasDeUso";
import Footer from "./Components/Footer";
import EventosComunitarios from "./Components/EventosComunitarios";
import "./App.css";

function App() {
  const disponibilidad = { "2024-12-15": "Disponible", "2024-12-17": "Reservado" };

  return (
    <Router>
      <div className="ReservaComunal">
        <Header />
        <nav className="App-nav">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/eventos">Eventos Comunitarios</Link>
            </li>
          </ul>
        </nav>
        <main className="App-main">
          <Routes>
            <Route path="/" element={
                <>
                  <FormularioReserva disponibilidad={disponibilidad} />
                  <ReglasDeUso />
                </>
              }
            />
            <Route path="/confirmacion" element={
              <>
                <ConfirmacionReserva/>
                <ReglasDeUso />
              </>
              } />
            <Route path="/eventos" element={
              <>
                <EventosComunitarios />
                <ReglasDeUso />
              </>
              } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

{/*import React, { useState} from 'react';
import Header from './Components/Header';
import FormularioReserva from './Components/FormularioReserva';
import ConfirmacionReserva from './Components/ConfirmacionReserva';
import ReglasDeUso from './Components/ReglasDeUso';
import Footer from './Components/Footer';

import './App.css';

function App() {

  // estado para manejar un objeto de tipo reserva
  const [reserva, setReserva] = useState(null);

  return (
    <div className="ReservaComunal">
      <Header/>
      <FormularioReserva setReserva={setReserva} />
      {reserva && <ConfirmacionReserva reserva={reserva} />}
      <ReglasDeUso className="ReglasUso"></ReglasDeUso>
      <Footer></Footer>
    </div>
  );
}

export default App;*/}
