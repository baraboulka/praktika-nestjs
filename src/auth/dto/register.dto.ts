import { IsNotEmpty, IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  readonly foreignIds: [] | null;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
