import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type UserDocument = User & mongoose.Document;

@Schema()
export class User {
  @Prop()
  userName: string;

  @Prop({
    type: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
      { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    ],
  })
  foreignIds: mongoose.ObjectId[];

  @Prop()
  password: string;

  @Prop()
  isActive: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
