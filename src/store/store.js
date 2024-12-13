import { configureStore } from '@reduxjs/toolkit';
import reservaReducer from './reservaSlice';

const store = configureStore({
  reducer: {
    reserva: reservaReducer, // Reducer para gestionar reservas
  },
});

export default store;