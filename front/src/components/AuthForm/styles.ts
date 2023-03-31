import { StyleSheet } from 'react-native';
import { colors } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: '90%',
    maxWidth: 500,
    padding: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    color: colors.black,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: colors.black,
    textAlign: 'center',
    marginTop: 32,
    fontWeight: '500',
  },
  link: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 4,
    padding: 12,
    marginVertical: 8,
    width: '100%',
    fontSize: 16,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 4,
    padding: 12,
    marginVertical: 16,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: colors.error,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: '500',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.black,
    marginBottom: 4,
  },
  inputContainer: {
    marginBottom: 16,
  },
  logo: {
    width: 180,
    height: 40,
    alignSelf: 'center',
    marginBottom: 24,
  },
  content:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});