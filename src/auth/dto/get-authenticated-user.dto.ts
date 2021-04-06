import { IsNotEmpty, IsString } from 'class-validator';

export class GetAuthenticatedUserDto {

  @IsString()
  readonly accessToken: string;
}
