import { IsNotEmpty, IsString } from 'class-validator';

export class GetAuthenticatedUserDto {
  @IsString()
  @IsNotEmpty()
  readonly userName: string;

  @IsString()
  @IsNotEmpty()
  readonly hashedPassword: string;
}
