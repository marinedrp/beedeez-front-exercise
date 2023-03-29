import {configureStore} from '@reduxjs/toolkit';
import { authSlice } from '../slices/authSlice';
import { stationsSlice } from '../slices/stationsSlice';

export default configureStore({
  reducer: {
    // auth: authSlice,
    // stations: stationsSlice,
  },
});