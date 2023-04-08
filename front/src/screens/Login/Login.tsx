import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {navigate} from '../../navigators/navigators.utils';
import api from '../../services/api';
import {loginStart, loginSuccess, loginFailure} from '../../slices/authSlice';
import {AuthForm} from '../../components/AuthForm/AuthForm';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
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
      const errorMessage = error.response.data.message;
      dispatch(loginFailure(errorMessage));
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
      handleAuth={handleLogin}
      redirectScreen="Signup"
      title="Log in to your account"
      text="Don't have an account yet?"
      link="Sign up here"
    />
  );
};
