import { IsNotEmpty, IsString } from 'class-validator';
import {
  ISchoolSubject,
  ISubjectTeacher,
} from 'src/subjects/schemas/subject.schema';

export class UpdateStudentDto {
  @IsString()
  @IsNotEmpty()
  readonly fullName: string;

  readonly teacherAssigned: ISubjectTeacher[] | null;

  readonly schedule: ISchoolSubject[] | null;
}
