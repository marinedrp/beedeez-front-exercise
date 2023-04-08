import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {navigate} from '../../navigators/navigators.utils';
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

  const handleSignup = async () => {
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
      const errorMessage = error.response.data.message;
      dispatch(signupFailure(errorMessage));
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
      redirectScreen="Login"
      title="Create your account"
      text="Already have an account?"
      link="Log in here"
    />
  );
};
