import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {navigate} from '../../navigators/utils';
import api from '../../services/api';
import {loginStart, loginSuccess, loginFailure} from '../../slices/authSlice';
import {AuthForm} from '../../components/AuthForm/AuthForm';

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
    <AuthForm
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      error={error}
      handleAuth={handleLogin}
      screen="Signup"
      title="Log in to your account"
      text="Don't have an account yet?"
      link="Sign up here"
    />
  );
};
