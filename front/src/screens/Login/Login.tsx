import {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {navigate} from '../../navigators/utils';
import api from '../../services/api';
import {loginStart, loginSuccess, loginFailure} from '../../slices/authSlice';
import {styles} from './styles';
import Logo from '../../assets/images/Logo-light.png';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }

    dispatch(loginStart());
    try {
      const response = await api.post('/login', {
        email,
        password,
      });
      dispatch(
        loginSuccess({
          user: response.data.data,
          token: response.data.authToken,
        }),
      );
      navigate('Home');
    } catch (error: any) {
      console.error(error);
      const errorMessage = error.response.data.message;
      dispatch(loginFailure(errorMessage));
      if (errorMessage === 'email must be an email')
        setError('Please enter a valid email.');
      else setError(errorMessage);

    }
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: Logo}} style={styles.logo} />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Log in to your account</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            value={password}
          />
        </View>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>
        Don't have an account yet?{' '}
        <Text style={styles.link} onPress={() => navigate('Signup')}>
          Sign up here.
        </Text>
      </Text>
    </View>
  );
};
