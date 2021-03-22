import { IsNotEmpty } from 'class-validator';
import * as mongoose from 'mongoose';

export class DeleteUserDto {
  @IsNotEmpty()
  readonly _id: mongoose.Schema.Types.ObjectId;
}
