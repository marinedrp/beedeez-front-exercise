import {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {navigate} from '../../navigators/utils';
import api from '../../services/api';
import {styles} from './styles';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await api.post('/login', {
        email,
        password,
      });
      navigate('Home')
      console.log(response.data);
    } catch (error: any) {
      setError(error.response.data.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        Don't have an account yet?{' '}
        <Text style={styles.link} onPress={() => navigate('Signup')}>
          Sign up here.
        </Text>
      </Text>
    </View>
  );
};
