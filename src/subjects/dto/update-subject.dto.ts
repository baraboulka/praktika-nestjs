import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';
import { ISubjectTeacher } from '../schemas/subject.schema';
export class UpdateSubjectDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  readonly teacher: ISubjectTeacher[] | null;

  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  readonly weeklyAmount: number;
}
