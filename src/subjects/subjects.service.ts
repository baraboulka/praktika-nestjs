import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { SchoolSubject, SchoolSubjectDocument } from './schemas/subject.schema'

@Injectable()
export class SubjectsService {
    constructor (@InjectModel(SchoolSubject.name) private schoolSubjectModel: Model<SchoolSubjectDocument>){}

    async getSubjects(): Promise<SchoolSubject[]> {
        return this.schoolSubjectModel.find().exec()
    }

    async getSubject(id: string): Promise<SchoolSubject> {
        return this.schoolSubjectModel.findById(id)
    }

    createSubject(schoolSubjectDto: CreateSubjectDto): Promise<SchoolSubject> {
        const newSubject = new this.schoolSubjectModel(schoolSubjectDto)

        return newSubject.save()
    }

    async updateSubjects(schoolSubjectsDto: UpdateSubjectDto[]): Promise<Promise<SchoolSubject>[]>{
        const updatedSubjects = await schoolSubjectsDto.map(async subj => {
            return await this.schoolSubjectModel.findByIdAndUpdate(subj['_id'], subj)
        })

        return updatedSubjects
    }

    async removeSubjects(ids: string[]): Promise<SchoolSubject[]> {
        return this.schoolSubjectModel.deleteMany({_id: {$in: ids}})
    }
}
