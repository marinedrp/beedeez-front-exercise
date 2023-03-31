import {StyleSheet} from 'react-native';
import {colors} from '../../theme/theme';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultsText: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.black,
  },
});
