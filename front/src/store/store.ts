import {configureStore} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
// import authSlice from '../slices/authSlice';
import { stationsSlice } from '../slices/stationsSlice';

export const store = configureStore({
  reducer: {
    // auth: authSlice,
    // stations: stationsSlice,
  },
});
