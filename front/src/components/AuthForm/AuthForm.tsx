import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {navigate} from '../../navigators/utils';
import {styles} from './styles';
import Logo from '../../assets/images/Logo-light.png';
import backgroundImage from '../../assets/images/Paris-map-background.jpg';

interface Props {
  email: string;
  setEmail: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
  error: string;
  handleAuth: () => void;
  screen: string;
  title: string;
  text: string;
  link: string;
}

export const AuthForm = ({
  email,
  setEmail,
  password,
  setPassword,
  error,
  handleAuth,
  screen,
  title,
  text,
  link,
}: Props) => {
  return (
    <ImageBackground
      source={{uri: backgroundImage}}
      resizeMode="cover"
      style={styles.container}
      imageStyle={{opacity: 0.08}}>
      <Image source={{uri: Logo}} style={styles.logo} />
      <View style={styles.formContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            onChangeText={setEmail}
            value={email}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />
        </View>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleAuth}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>
        {text}{' '}
        <Text style={styles.link} onPress={() => navigate(screen)}>
          {link}
        </Text>
      </Text>
    </ImageBackground>
  );
};
