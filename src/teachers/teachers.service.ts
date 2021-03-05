import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher, TeacherDocument } from './schemas/teacher.schema';

@Injectable()
export class TeachersService {
  constructor(
    @InjectModel(Teacher.name)
    private teacherModel: Model<TeacherDocument>,
  ) { }

  async getTeachers(): Promise<Teacher[]> {
    return this.teacherModel.find().exec();
  }

  async getTeacher(id: string): Promise<Teacher> {
    return this.teacherModel.findById(id);
  }

  createTeacher(teacherDto: CreateTeacherDto): Promise<Teacher> {
    const newTeacher = new this.teacherModel(teacherDto);

    return newTeacher.save();
  }

  async updateTeacher(
    id: string,
    teacherDto: UpdateTeacherDto,
  ): Promise<Teacher> {
    return this.teacherModel.findByIdAndUpdate(id, teacherDto, { new: true });
  }

  async deleteTeacher(id: string): Promise<Teacher> {
    return this.teacherModel.findByIdAndDelete(id);
  }
}
