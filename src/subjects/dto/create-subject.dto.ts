import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateSubjectDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly teacher: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  readonly weeklyAmount: number;
}
