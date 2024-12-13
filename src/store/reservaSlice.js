import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reserva: null, // Estado inicial de la reserva
};

const reservaSlice = createSlice({
  name: 'reserva',
  initialState,
  reducers: {
    // Acción para guardar una reserva
    guardarReserva: (state, action) => {
      state.reserva = action.payload;
    },
    // Acción para limpiar una reserva (reiniciar)
    limpiarReserva: (state) => {
      state.reserva = null;
    },
  },
});

export const { guardarReserva, limpiarReserva } = reservaSlice.actions;

export default reservaSlice.reducer;
