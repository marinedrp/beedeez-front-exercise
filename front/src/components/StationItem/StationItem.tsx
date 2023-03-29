import {View, Text} from 'react-native';
import { Station } from '../../types/Station';
import { styles } from './styles';

export const StationItem = ({item}: {item: Station}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{item.name}</Text>
      <Text style={styles.codeText}>Code: {item.stationCode}</Text>
      <Text style={styles.bikesText}>Available Bikes: {item.num_bikes_available}</Text>
    </View>
  );
};