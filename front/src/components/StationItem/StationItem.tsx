import {View, Text} from 'react-native';
import { Station } from '../../types/station';
import { styles } from './styles';
import EbikeIcon from '../../assets/icons/EbikeIcon';
import MechanicalBikeIcon from '../../assets/icons/MechanicalBikeIcon';
import DocksIcon from '../../assets/icons/DocksIcon';
import { colors } from '../../theme/theme';

export const StationItem = ({item}: {item: Station}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{item.name}</Text>
      <Text style={styles.codeText}>Code: {item.stationCode}</Text>
      <View style={styles.separator} />
      <View style={styles.dataContainer}>
        <View style={styles.dataRow}>
          <EbikeIcon color={colors.secondaryVariant} />
          <Text style={styles.dataText}>Electric Bikes: {item.num_bikes_available_types[1].ebike}</Text>
        </View>
        <View style={styles.dataRow}>
          <MechanicalBikeIcon color={colors.primaryVariant} />
          <Text style={styles.dataText}>Mechanical Bikes: {item.num_bikes_available_types[0].mechanical}</Text>
        </View>
        <View style={styles.dataRow}>
          <DocksIcon color='#1E4680' />
          <Text style={styles.dataText}>Docking Points Available: {item.numBikesAvailable}</Text>
        </View>
      </View>
    </View>
  );
};