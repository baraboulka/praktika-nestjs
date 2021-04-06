import { IsNotEmpty, IsString } from 'class-validator';
import * as mongoose from 'mongoose';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  readonly foreignIds: mongoose.Schema.Types.ObjectId[] | null;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
