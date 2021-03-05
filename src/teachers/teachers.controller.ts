import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './schemas/teacher.schema';
import { TeachersService } from './teachers.service';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teacherService: TeachersService) { }

  @Get()
  getTeachers(): Promise<Teacher[]> {
    return this.teacherService.getTeachers();
  }

  @Get(':id')
  getTeacher(@Param('id') id: string): Promise<Teacher> {
    return this.teacherService.getTeacher(id);
  }

  @Post()
  createTeacher(@Body() createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    return this.teacherService.createTeacher(createTeacherDto);
  }

  @Put(':id')
  updateTeacher(
    @Param('id') id: string,
    @Body() updateTeacherDto: UpdateTeacherDto,
  ): Promise<Teacher> {
    return this.teacherService.updateTeacher(id, updateTeacherDto);
  }

  @Delete(':id')
  deleteTeacher(@Param('id') id: string): Promise<Teacher> {
    return this.teacherService.deleteTeacher(id);
  }
}
