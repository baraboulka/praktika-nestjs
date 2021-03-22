import { IsNotEmpty, IsString } from 'class-validator';
import * as mongoose from 'mongoose';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly userName: string;

  readonly foreignIds: mongoose.Schema.Types.ObjectId[] | null;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
