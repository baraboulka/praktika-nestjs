import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateSubjectDto {
    @IsString()
    @IsNotEmpty()
    readonly title: string

    @IsString()
    @IsNotEmpty()
    readonly teacher: string

    @IsNumber()
    @IsNotEmpty()
    readonly weeklyAmount: number
}