import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { AuthUserData, DataStoredInToken, TokenData } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import userModel from '@models/users.model';
import { isEmpty } from '@utils/util';

class AuthService {
  private validateEmptyFields(userData: CreateUserDto): boolean {
    return userData.email !== '' && userData.password !== '';
  }

  private validatePassword(password: string): boolean {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return passwordRegex.test(password);
  }

  public async signup(userData: CreateUserDto): Promise<AuthUserData> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    if (!this.validateEmptyFields(userData)) throw new HttpException(400, 'Please fill in both email and password.');

    const findUser: User = await userModel.findOne({ email: userData.email });
    if (findUser) throw new HttpException(409, `This email ${userData.email} already exists`);

    if (!this.validatePassword(userData.password))
      throw new HttpException(
        400,
        'Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter.',
      );

    const hashedPassword = await hash(userData.password, 10);
    const createUserData: User = await userModel.create({ ...userData, password: hashedPassword });

    const tokenData = this.createToken(createUserData);
    const cookie = this.createCookie(tokenData);

    return {
      cookie,
      authToken: tokenData,
      user: {
        _id: createUserData._id,
        email: createUserData.email,
      },
    };
  }

  public async login(userData: CreateUserDto): Promise<AuthUserData> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    if (!this.validateEmptyFields(userData)) throw new HttpException(400, 'Please fill in both email and password.');

    const findUser: User = await userModel.findOne({ email: userData.email });
    if (!findUser) throw new HttpException(409, `This email ${userData.email} was not found`);

    const isPasswordMatching: boolean = await compare(userData.password, findUser.password);
    if (!isPasswordMatching) throw new HttpException(409, 'Password is not matching');

    const tokenData = this.createToken(findUser);
    const cookie = this.createCookie(tokenData);

    return {
      cookie,
      authToken: tokenData,
      user: {
        _id: findUser._id,
        email: findUser.email,
      },
    };
  }

  public async logout(userData: User): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    const findUser: User = await userModel.findOne({ email: userData.email, password: userData.password });
    if (!findUser) throw new HttpException(409, `This email ${userData.email} was not found`);

    return findUser;
  }

  public createToken(user: User): TokenData {
    const dataStoredInToken: DataStoredInToken = { _id: user._id };
    const secretKey: string = SECRET_KEY || 'mySecretKey';
    const expiresIn: number = 60 * 60;

    return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
  }

  public createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
  }
}

export default AuthService;
