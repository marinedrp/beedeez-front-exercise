import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {navigate} from '../../navigators/utils';
import api from '../../services/api';
import {
  signupStart,
  signupSuccess,
  signupFailure,
} from '../../slices/authSlice';
import {AuthForm} from '../../components/AuthForm/AuthForm';

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
    <AuthForm
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      error={error}
      handleAuth={handleSignup}
      screen='Login'
      title='Create your account'
      text='Already have an account?'
      link='Log in here'
    />
  );
};
