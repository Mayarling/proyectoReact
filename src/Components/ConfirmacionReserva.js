import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { limpiarReserva } from '../store/reservaSlice';
import { useNavigate } from 'react-router-dom';

const ConfirmacionReserva = () => {
  const reserva = useSelector((state) => state.reserva.reserva); // Leer reserva del store
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nuevaReserva = () => {
    dispatch(limpiarReserva()); // Limpiar reserva
    navigate("/");
  };

  return (
    <div>
      {reserva ? (
        <>
          <h3 className="titulo">Confirmación de la Reserva</h3>
          <p>Fecha: {reserva.fecha}</p>
          <p>Evento: {reserva.nombreEvento}</p>
          <p>Número de Asistentes: {reserva.numAsistentes}</p>
          <p>Horario: {reserva.horarioInicio} - {reserva.horarioFinal}</p>
          <h5 className="confirmado">Reserva Confirmada</h5>
          <button onClick={nuevaReserva}>Hacer Nueva Reserva</button>
        </>
      ) : (
        <p>No hay ninguna reserva activa.</p>
      )}
    </div>
  );
  

};

export default ConfirmacionReserva;