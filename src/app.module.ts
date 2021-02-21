import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubjectsModule } from './subjects/subjects.module';

@Module({
  imports: [SubjectsModule, MongooseModule.forRoot('mongodb://localhost:27017/praktika-nestjs')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
