import {TouchableOpacity, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {navigate} from '../../navigators/navigators.utils';
import {logout} from '../../slices/authSlice';
import {styles} from './LogoutButton.styles';
import LogoutIcon from '../../assets/icons/LogoutIcon';
import {clearStations} from '../../slices/stationsSlice';

export const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearStations());
    navigate('Login');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleLogout}>
      <Text style={styles.buttonText}>Log Out</Text>
      <LogoutIcon />
    </TouchableOpacity>
  );
};
