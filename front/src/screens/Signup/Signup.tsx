import {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {navigate} from '../../navigators/utils';
import api from '../../services/api';
import {
  signupStart,
  signupSuccess,
  signupFailure,
} from '../../slices/authSlice';
import {styles} from './styles';
import Logo from '../../assets/images/Logo-light.png';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const validatePassword = (password: string) => {
    // Check if the password has at least 6 characters, one number, one lowercase, and one uppercase letter
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return regex.test(password);
  };

  const handleSignup = async () => {
    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }

    if (!validatePassword(password)) {
      setError(
        'Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter',
      );
      return;
    }

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
      console.error(error);
      const errorMessage = error.response.data.message;
      dispatch(signupFailure(errorMessage));
      if (errorMessage === 'email must be an email')
        setError('Please enter a valid email.');
      else if (errorMessage === `This email ${email} already exists`)
        setError(errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: Logo}} style={styles.logo} />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Create your account</Text>
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
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>
        Already have an account?{' '}
        <Text style={styles.link} onPress={() => navigate('Login')}>
          Log in here.
        </Text>
      </Text>
    </View>
  );
};
