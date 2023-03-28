import {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import { StationItem } from '../components/StationItem';
import { Station } from '../interfaces/Station';
import api from '../services/api';

export const Home = () => {
  const [stations, setStations] = useState<Station[]>([]);

  useEffect(() => {
    fetchStations();
  }, []);

  const fetchStations = async () => {
    try {
      const response = await api.get('/stations');
      setStations(response.data.data);
    } catch (error: any) {
        console.error(error)
    }
  };

  const renderItem = ({item}: {item: Station}) => (
    <StationItem item={item} />
  );

  return (
      <FlatList
        data={stations}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
  );
};