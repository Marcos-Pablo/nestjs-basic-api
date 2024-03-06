import { IUser } from 'src/users/interfaces/user';

export class SignUpResponseDto {
  id: string;
  username: string;

  static createFromUser(user: IUser): SignUpResponseDto {
    const signUpResponseDto = new SignUpResponseDto();
    signUpResponseDto.id = user.getId();
    signUpResponseDto.username = user.getUsername();
    return signUpResponseDto;
  }
}
