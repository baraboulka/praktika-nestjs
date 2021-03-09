import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type StudentDocument = Student & mongoose.Document;

@Schema()
export class Student {
  @Prop({ required: true })
  fullName: string;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Teacher' })
  teacherAssigned: mongoose.ObjectId[];

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'SchoolSubject' })
  schedule: mongoose.ObjectId[];
}

export const StudentSchema = SchemaFactory.createForClass(Student);
