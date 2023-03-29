import {View, ActivityIndicator} from 'react-native';
import { styles } from './styles';

export const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size={'large'} color={'#5085A5'} />
    </View>
  );
};
