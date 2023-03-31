import {View, ActivityIndicator} from 'react-native';
import {styles} from './styles';
import {colors} from '../../theme/theme';

export const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size={'large'} color={colors.primary} />
    </View>
  );
};
