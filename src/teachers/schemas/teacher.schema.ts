import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type TeacherDocument = Teacher & Document;

@Schema()
export class Teacher {
  @Prop()
  fullName: string;

  @Prop()
  subjectsTaught: string[];

  @Prop()
  students: ObjectId[];
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
