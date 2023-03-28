import {View, Text, StyleSheet} from 'react-native';
import { Station } from '../interfaces/Station';

export const StationItem = ({item}: {item: Station}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{item.name}</Text>
      <Text style={styles.codeText}>Code: {item.stationCode}</Text>
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
  nameText: {
    color: '#1A2E42',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  codeText: {
    color: '#64717d',
    fontSize: 16,
    marginBottom: 5,
  },
  bikesText: {
    color: '#5085A5',
    fontWeight: '500',
    fontSize: 16,
  },
});