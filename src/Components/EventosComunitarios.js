import React, { useState, useEffect } from "react";

const EventosComunitarios = () => {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setEventos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar los eventos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="eventos-container">
        <p>Cargando eventos...</p>
      </div>
    );
  }

  return (
    <div className="eventos-container">
      <h3>Eventos Comunitarios</h3>
      <ul>
        {eventos.map((evento) => (
          <li key={evento.id}>
            <strong>{evento.name}</strong>: {evento.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventosComunitarios;
