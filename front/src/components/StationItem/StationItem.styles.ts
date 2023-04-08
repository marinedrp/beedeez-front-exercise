import {StyleSheet} from 'react-native';
import { colors } from '../../theme/theme';

export const styles = StyleSheet.create({
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
    color: colors.black,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  codeText: {
    color: '#666666',
    fontSize: 16,
    marginBottom: 5,
  },
  dataContainer: {
    flexDirection: 'column',
  },
  dataRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  dataText: {
    color: colors.black,
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 10,
  },
  separator: {
    borderBottomColor: '#dbdbdb',
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});