type NumBikesAvailableType = {
  mechanical: number;
  ebike: number;
};

export type Station = {
  _id: string;
  station_id: number;
  createdAt: Date;
  is_installed: number;
  is_renting: number;
  is_returning: number;
  last_reported: number;
  numBikesAvailable: number;
  numDocksAvailable: number;
  num_bikes_available: number;
  num_bikes_available_types: NumBikesAvailableType[];
  num_docks_available: number;
  stationCode: string;
  updatedAt: Date;
  capacity: number;
  lat: number;
  lon: number;
  name: string;
};
