import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { IUser } from '../interfaces/user';
import { SignUpRequestDto } from 'src/auth/dtos/sign-up-request.dto';
import { User } from '../models/user';
import { ulid } from 'ulid';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async getByUsername(username: string): Promise<IUser> {
    return await this.userRepository.getByUsername(username);
  }

  async create(signUpRequestDto: SignUpRequestDto): Promise<IUser> {
    const user = new User(
      ulid(),
      signUpRequestDto.username,
      signUpRequestDto.password,
    );
    return await this.userRepository.create(user);
  }
}
