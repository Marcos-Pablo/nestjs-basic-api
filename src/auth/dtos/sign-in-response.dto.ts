export class SignInResponseDto {
  access_token: string;

  static createFromAcessToken(acessToken: string): SignInResponseDto {
    const signInResponseDto = new SignInResponseDto();
    signInResponseDto.access_token = acessToken;

    return signInResponseDto;
  }
}
