import { IsNotEmpty, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  readonly fullName: string;

  readonly teacherAssigned: ObjectId[] | null;

  readonly schedule: ObjectId[] | null;
}
