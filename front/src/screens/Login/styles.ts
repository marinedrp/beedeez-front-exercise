import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    text: {
      fontSize: 18,
    },
    link: {
      fontSize: 18,
      color: '#74B3CE',
      textDecorationLine: 'underline',
    },
    input: {
      borderWidth: 1,
      borderColor: '#CCC',
      borderRadius: 4,
      padding: 8,
      marginVertical: 8,
      width: '80%',
      fontSize: 18,
    },
    button: {
      backgroundColor: '#74B3CE',
      borderRadius: 4,
      padding: 12,
      marginVertical: 8,
      width: '80%',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
    },
    errorText: {
      color: 'red',
      marginBottom: 10,
      textAlign: 'center',
    },
  });