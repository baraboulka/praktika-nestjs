import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SubjectsController } from "./subjects.controller";
import { SubjectsService } from "./subjects.service";
import { SchoolSubject, SchoolSubjectSchema } from "./schemas/subject.schema";

@Module({
    providers: [SubjectsService],
    controllers: [SubjectsController],
    imports: [MongooseModule.forFeature([
        {name: SchoolSubject.name, schema: SchoolSubjectSchema}

    ])]
})

export class SubjectsModule {

}