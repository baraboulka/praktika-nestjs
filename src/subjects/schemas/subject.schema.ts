import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type SchoolSubjectDocument = SchoolSubject & Document

@Schema()
export class SchoolSubject {

    @Prop()
    title: string

    @Prop()
    teacher: string
    
    @Prop()
    weeklyAmount: number
}

export const SchoolSubjectSchema = SchemaFactory.createForClass(SchoolSubject)