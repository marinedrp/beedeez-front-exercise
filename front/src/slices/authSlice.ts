import {TokenData, UserData} from '../types/auth';

type InitialState = {
  user: UserData | null;
  token: TokenData | null;
  loading: boolean;
  error: string;
};

const initialState: InitialState = {
  user: null,
  token: null,
  loading: false,
  error: '',
};