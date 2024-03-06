import { IUser } from '../interfaces/user';

export abstract class UserRepository {
  abstract getByUsername(username: string): Promise<IUser>;
  abstract create(user: IUser): Promise<IUser>;
}
