import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { guardarReserva } from '../store/reservaSlice';

const FormularioReserva = ({ disponibilidad }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Hook para disparar acciones

  const onSubmit = (data) => {
    if (disponibilidad[data.fecha] === "Disponible") {
      dispatch(guardarReserva(data)); // Guardar reserva en el store
      navigate("/confirmacion");
    } else {
      alert("La fecha seleccionada no está disponible.");
    }
  };

  const fechaSeleccionada = watch("fecha");

  return (
    <>
      <h2>Crear Reserva de Salón</h2>
      <form className='formulario-reserva' onSubmit={handleSubmit(onSubmit)}>
        <label>Fecha de reserva:</label>
        <input type="date" {...register("fecha", { required: "La fecha es obligatoria" })} />
        {errors.fecha && <p>{errors.fecha.message}</p>}
        <p>
          {fechaSeleccionada && (disponibilidad[fechaSeleccionada] === "Disponible"
            ? "La fecha está disponible."
            : "La fecha ya está reservada.")}
        </p>
        <br />
        <label>Nombre del Evento:</label>
        <input type="text" {...register("nombreEvento", { required: "El nombre del evento es obligatorio" })} />
        {errors.nombreEvento && <p>{errors.nombreEvento.message}</p>}
        <br />
        <label>Número de Asistentes:</label>
        <input
          type="number"
          {...register("numAsistentes", {
            required: "El número de asistentes es obligatorio",
            min: { value: 1, message: "Debe haber al menos un asistente" },
          })}
        />
        {errors.numAsistentes && <p>{errors.numAsistentes.message}</p>}
        <br />
        <label>Hora de inicio:</label>
        <input type="time" {...register("horarioInicio", { required: "La hora de inicio es obligatoria" })} />
        {errors.horarioInicio && <p>{errors.horarioInicio.message}</p>}
        <br />
        <label>Hora de finalización:</label>
        <input type="time" {...register("horarioFinal", { required: "La hora de finalización es obligatoria" })} />
        {errors.horarioFinal && <p>{errors.horarioFinal.message}</p>}
        <br />
        <br />
        <button type="submit">Reservar</button>
      </form>
    </>
  );
};

export default FormularioReserva;
