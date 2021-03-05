import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type SchoolSubjectDocument = SchoolSubject & mongoose.Document;

export interface ISubjectTeacher {
  id: { type: mongoose.Schema.Types.ObjectId; ref: 'Teacher' };
}

@Schema()
export class SchoolSubject {
  @Prop({ required: true })
  title: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true,
  })
  teacher: ISubjectTeacher[];

  @Prop({ required: true })
  weeklyAmount: number;
}

export const SchoolSubjectSchema = SchemaFactory.createForClass(SchoolSubject);
