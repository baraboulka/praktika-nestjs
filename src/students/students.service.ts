import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student, StudentDocument } from './schemas/student.schema';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name)
    private studentModel: Model<StudentDocument>,
  ) { }

  async getStudents(): Promise<any> {
    const students = await this.studentModel
      .aggregate()
      .lookup({
        from: 'teachers',
        localField: 'teacherAssigned',
        foreignField: '_id',
        as: 'teacherResponsible',
      })
      .lookup({
        from: 'schoolsubjects',
        localField: 'schedule',
        foreignField: '_id',
        as: 'subjectsAssigned',
      })
      .project({
        fullName: 1,
        'teacherResponsible._id': 1,
        'teacherResponsible.fullName': 1,
        'subjectsAssigned._id': 1,
        'subjectsAssigned.title': 1,
      });

    return students;
  }

  createStudent(studentDto: CreateStudentDto): Promise<Student> {
    const newStudent = new this.studentModel(studentDto);

    return newStudent.save();
  }
}
