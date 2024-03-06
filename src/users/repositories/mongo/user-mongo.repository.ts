import { IUser } from 'src/users/interfaces/user';
import { UserRepository } from '../user.repository';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { BadRequestException } from '@nestjs/common';

export class UserMongoRepository extends UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {
    super();
  }
  async getByUsername(username: string): Promise<IUser> {
    return await this.userModel.findOne<IUser>({ username });
  }
  async create(user: IUser): Promise<IUser> {
    const usernameAlreadyInUse = await this.getByUsername(user.getUsername());
    if (usernameAlreadyInUse)
      throw new BadRequestException('This username already exists.');
    return await this.userModel.create(user);
  }
}
