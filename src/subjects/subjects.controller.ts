import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { SchoolSubject } from './schemas/subject.schema';
import { SubjectsService } from './subjects.service';

@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectService: SubjectsService) { }

  @Get()
  getSubjects(): Promise<SchoolSubject[]> {
    return this.subjectService.getSubjects();
  }

  @Get(':id')
  getSubject(@Param('id') id: string): Promise<SchoolSubject[]> {
    return this.subjectService.getSubject(id);
  }

  @Post()
  createSubject(
    @Body() createSubjectDto: CreateSubjectDto,
  ): Promise<SchoolSubject> {
    return this.subjectService.createSubject(createSubjectDto);
  }

  @Put()
  updateSubjects(
    @Body() updateSubjectsDto: UpdateSubjectDto[],
  ): Promise<Promise<SchoolSubject>[]> {
    return this.subjectService.updateSubjects(updateSubjectsDto);
  }

  @Delete()
  removeSubjects(@Body() ids: string[]): Promise<SchoolSubject> {
    return this.subjectService.removeSubjects(ids);
  }
}
