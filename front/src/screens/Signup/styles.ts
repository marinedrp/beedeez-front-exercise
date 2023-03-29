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
      color: '#8499A5',
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
      backgroundColor: '#8499A5',
      borderRadius: 4,
      padding: 12,
      marginVertical: 8,
      width: '80%',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    errorText: {
      color: 'red',
      marginBottom: 10,
      textAlign: 'center',
    },
  });