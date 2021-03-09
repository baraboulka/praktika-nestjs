import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import {
  SchoolSubject,
  SchoolSubjectSchema,
} from 'src/subjects/schemas/subject.schema';
import { Teacher, TeacherSchema } from 'src/teachers/schemas/teacher.schema';
import { Student, StudentSchema } from './schemas/student.schema';

@Module({
  providers: [StudentsService],
  controllers: [StudentsController],
  imports: [
    MongooseModule.forFeature([
      { name: SchoolSubject.name, schema: SchoolSubjectSchema },
      { name: Teacher.name, schema: TeacherSchema },
      { name: Student.name, schema: StudentSchema },
    ]),
  ],
})
export class StudentsModule { }
