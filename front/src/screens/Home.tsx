import {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View, ActivityIndicator} from 'react-native';
import { Loader } from '../components/Loader';
import {StationItem} from '../components/StationItem';
import {Station} from '../interfaces/Station';
import api from '../services/api';

export const Home = () => {
  const [stations, setStations] = useState<Station[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchStations();
  }, []);

  const fetchStations = async () => {
    setIsLoading(true);
    try {
      const response = await api.get('/stations');
      setStations(response.data.data);
      setIsLoading(false);
    } catch (error: any) {
      console.error(error);
    }
  };

  const renderLoader = () => {
    return isLoading ? (
      <Loader />
    ) : null;
  };

  const renderItem = ({item}: {item: Station}) => <StationItem item={item} />;

  return (
    <FlatList
      data={stations}
      renderItem={renderItem}
      keyExtractor={item => item._id.toString()}
      ListFooterComponent={renderLoader}
    />
  );
};

