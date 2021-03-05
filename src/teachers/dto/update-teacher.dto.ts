import { IsArray, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';

export class UpdateTeacherDto {
  @IsString()
  readonly fullName: string;

  @IsArray()
  readonly subjectsTaught: string[];

  @IsArray()
  readonly students: ObjectId[];
}
