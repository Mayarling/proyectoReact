import React from "react";
import "./Footer.css";


const Footer = () => (
  <footer className="App-footer">
    <div className="App-footer-contact">
      <p>Contacto: <a href="mailto:reservacomunal@.com">reservacomunal@.com</a></p>
      <p>Teléfono: <a href="tel:22405010">2240-5010</a></p>
    </div>
    <p>
      <a href="#reglas-de-uso" className="App-footer-link">Leer las reglas de uso del salón</a>
    </p>
    <p>© {new Date().getFullYear()} Reserva Comunal. Todos los derechos reservados.</p>
  </footer>
);

export default Footer;

{/*const Footer = () => (
    <footer>
      <p>Contacto: reservacomunal@.com</p>
      <p>Telefono: 2240-5010</p>
      <p>Leer las reglas de uso del salón</p>
    </footer>
  );
  
  export default Footer;*/}