import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
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
    <View>
      <Text>Station Code: {item.stationCode}</Text>
      <Text>Station Name: {item.name}</Text>
      <Text>Available Bikes: {item.num_bikes_available}</Text>
    </View>
  );

  return (
    <View>
      <Text>This is the Home Page.</Text>
      <FlatList
        data={stations}
        renderItem={renderItem}
        keyExtractor={(item) => item._id.toString()}
      />
    </View>
  );
};