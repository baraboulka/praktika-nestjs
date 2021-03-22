import { IsNotEmpty, IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  readonly userName: string;

  readonly foreignIds: [] | null;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
