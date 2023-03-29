import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '../../navigators/utils';
import api from '../../services/api';
import { signupStart, signupSuccess, signupFailure } from '../../slices/authSlice';
import { RootState } from '../../store/store';
import { styles } from './styles';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector((state: RootState) => state.auth.error);
  const dispatch = useDispatch();

  const handleSignup = async () => {
    dispatch(signupStart());
    try {
      const response = await api.post('/signup', {
        email,
        password,
      });
      dispatch(
        signupSuccess({
          user: response.data.data,
          token: response.data.authToken,
        }),
      );
      navigate('Login');
    } catch (error: any) {
      console.error(error)
      dispatch(signupFailure(error.response.data.message));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        Already have an account?{' '}
        <Text style={styles.link} onPress={() => navigate('Login')}>
          Log in here.
        </Text>
      </Text>
    </View>
  );
};

