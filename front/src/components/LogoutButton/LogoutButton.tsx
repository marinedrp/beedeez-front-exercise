import {TouchableOpacity, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {navigate} from '../../navigators/utils';
import {logout} from '../../slices/authSlice';
import {styles} from './styles';
import LogoutIcon from '../../assets/icons/LogoutIcon';

export const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('Login');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log Out</Text>
        <LogoutIcon />
    </TouchableOpacity>
  );
};
