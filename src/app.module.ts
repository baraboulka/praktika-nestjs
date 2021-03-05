import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubjectsModule } from './subjects/subjects.module';
import { TeachersModule } from './teachers/teachers.module';

@Module({
  imports: [
    SubjectsModule,
    TeachersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/praktika-nestjs'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
