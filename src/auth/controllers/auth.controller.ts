import { Body, Controller, Post } from '@nestjs/common';
import { SignUpRequestDto } from '../dtos/sign-up-request.dto';
import { AuthService } from '../services/auth.service';
import { SignUpResponseDto } from '../dtos/sign-up-response.dto';
import { SignInRequestDto } from '../dtos/sign-in-request.dto';
import { SignInResponseDto } from '../dtos/sign-in-response.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  async signIn(
    @Body() signInRequestDto: SignInRequestDto,
  ): Promise<SignInResponseDto> {
    const acessToken = await this.authService.signIn(signInRequestDto);

    return SignInResponseDto.createFromAcessToken(acessToken);
  }

  @Post('sign-up')
  async signUp(
    @Body() signUpRequestDto: SignUpRequestDto,
  ): Promise<SignUpResponseDto> {
    const user = await this.authService.signUp(signUpRequestDto);

    return SignUpResponseDto.createFromUser(user);
  }
}
