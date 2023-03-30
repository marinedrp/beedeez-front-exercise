import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store/store';
import {Station} from '../types/station';
import api from '../services/api';

interface StationState {
  stations: Station[];
  loading: boolean;
  errorMessage: string | null;
}

const initialState: StationState = {
  stations: [],
  loading: false,
  errorMessage: null,
};

export const fetchStations = createAsyncThunk(
  'stations/fetchStations',
  async () => {
    const response = await api.get('/stations');
    return response.data.data;
  },
);

const stationSlice = createSlice({
  name: 'stations',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchStations.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      fetchStations.fulfilled,
      (state, action: PayloadAction<Station[]>) => {
        state.stations = action.payload;
        state.loading = false;
        state.errorMessage = null;
      },
    );
    builder.addCase(fetchStations.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = action.error.message || 'Failed to fetch stations.';
    });
  },
});

export const selectStations = (state: RootState) => state.stations.stations;
export const selectLoading = (state: RootState) => state.stations.loading;
export const selectError = (state: RootState) => state.stations.errorMessage;

export default stationSlice.reducer;
