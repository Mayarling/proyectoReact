import React from 'react';
import { FaClock, FaTrash, FaUsers, FaBroom, FaDoorOpen } from "react-icons/fa";
import "./ReglasDeUso.css";

const ReglasDeUso = () => (
  <section>
    <h3 id="reglas-de-uso">Reglas de Uso de la Sala</h3>
    <ul>
      <li><FaClock /> Respetar los horarios de reserva.</li>
      <li><FaBroom /> Mantener la sala limpia y ordenada.</li>
      <li><FaUsers /> No exceder la capacidad de personas permitida.</li>
      <li><FaTrash /> Recoger toda la basura.</li>
      <li><FaDoorOpen /> Cuidar del salón.</li>
    </ul>
  </section>
);

export default ReglasDeUso;

{/*const ReglasDeUso = () => (
    <section>
      <h3>Reglas de Uso del salón</h3>
      <ul>
        <li>Respetar los horarios de reserva.</li>
        <br/>
        <li>Mantener la sala limpia y ordenada.</li>
        <br/>
        <li>No exceder la capacidad de personas permitida.</li>
        <br/>
        <li>Recoger toda la basura.</li>
        <br/>
        <li>Cuidar del salón.</li>
      </ul>
    </section>
  );
  
  export default ReglasDeUso;*/}