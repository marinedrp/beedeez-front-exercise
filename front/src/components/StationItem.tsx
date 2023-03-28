import {View, Text, StyleSheet} from 'react-native';
import { Station } from '../interfaces/Station';

export const StationItem = ({item}: {item: Station}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.codeText}>Station Code: {item.stationCode}</Text>
      <Text style={styles.nameText}>Station Name: {item.name}</Text>
      <Text style={styles.bikesText}>Available Bikes: {item.num_bikes_available}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  codeText: {
    color: '#1A2E42',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  nameText: {
    color: '#6F7E8C',
    fontSize: 16,
    marginBottom: 5,
  },
  bikesText: {
    color: '#5085A5',
    fontSize: 16,
  },
});