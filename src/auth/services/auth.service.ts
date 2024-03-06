import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';
import { SignUpRequestDto } from '../dtos/sign-up-request.dto';
import { IUser } from 'src/users/interfaces/user';
import * as bcrypt from 'bcrypt';
import { SignInRequestDto } from '../dtos/sign-in-request.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(signInRequestDto: SignInRequestDto): Promise<string> {
    const user = await this.userService.getByUsername(
      signInRequestDto.username,
    );
    const isMatch = user
      ? await bcrypt.compare(signInRequestDto.password, user.getPassword())
      : false;
    if (!isMatch) throw new UnauthorizedException();

    const jwtPayload = { sub: user.getId(), username: user.getUsername() };

    return await this.jwtService.signAsync(jwtPayload);
  }

  async signUp(signUpRequestDto: SignUpRequestDto): Promise<IUser> {
    const salt = await bcrypt.genSalt();
    signUpRequestDto.password = await bcrypt.hash(
      signUpRequestDto.password,
      salt,
    );
    return await this.userService.create(signUpRequestDto);
  }
}
