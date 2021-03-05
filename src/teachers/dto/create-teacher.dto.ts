import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateTeacherDto {
  @IsString()
  @IsNotEmpty()
  readonly fullName: string;

  @IsArray()
  @IsNotEmpty()
  readonly subjectsTaught: string[];

  @IsArray()
  @IsNotEmpty()
  readonly students: ObjectId[];
}
