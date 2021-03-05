import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubjectsController } from './subjects.controller';
import { SubjectsService } from './subjects.service';
import { SchoolSubject, SchoolSubjectSchema } from './schemas/subject.schema';
import { Teacher, TeacherSchema } from 'src/teachers/schemas/teacher.schema';

@Module({
  providers: [SubjectsService],
  controllers: [SubjectsController],
  imports: [
    MongooseModule.forFeature([
      { name: SchoolSubject.name, schema: SchoolSubjectSchema },
      { name: Teacher.name, schema: TeacherSchema },
    ]),
  ],
})
export class SubjectsModule { }
