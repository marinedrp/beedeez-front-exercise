export type UserData = {
  _id: string;
  email: string;
};

export type TokenData = {
  token: string;
  expiresIn: number;
};

export interface AuthState {
  user: UserData | null;
  token: TokenData | null;
  loading: boolean;
  error: string;
};
