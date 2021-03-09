import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './schemas/student.schema';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentService: StudentsService) { }

  @Get()
  getStudents(): Promise<any> {
    return this.studentService.getStudents();
  }

  @Post()
  createStudent(@Body() studentDto: CreateStudentDto): Promise<Student> {
    return this.studentService.createStudent(studentDto);
  }
}
