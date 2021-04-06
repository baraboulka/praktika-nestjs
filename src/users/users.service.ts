import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) { }

  async getUsers(): Promise<User[]> {
    return this.userModel
      .aggregate()
      .lookup({
        from: 'teachers',
        localField: 'foreignIds',
        foreignField: '_id',
        as: 'teacher',
      })
      .lookup({
        from: 'students',
        localField: 'foreignIds',
        foreignField: '_id',
        as: 'student',
      })
      .lookup({
        from: 'schoolsubjects',
        localField: 'student.schedule',
        foreignField: '_id',
        as: 'subjectsAssigned',
      })
      .project({
        username: 1,
        'teacher._id': 1,
        'teacher.fullName': 1,
        'teacher.subjectsTaught': 1,
        'student._id': 1,
        'student.fullName': 1,
        'subjectsAssigned.title': 1,
        isActive: 1,
      })
      .then((users) => users.filter((val) => val.isActive));
  }

  async getUser(username: string): Promise<User> {
    const user = await this.userModel.findOne({ username });

    console.log(user);

    return user;
  }

  createUser(userDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel({ ...userDto, isActive: true });

    return newUser.save();
  }

  async updateUser(id: string, userDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, userDto, { new: true });
  }

  async deleteUser(id: DeleteUserDto): Promise<User> {
    const userToDelete = await this.userModel.findById(id);
    return this.userModel.findByIdAndUpdate(
      id,
      { ...userToDelete, isActive: false },
      { new: true },
    );
  }
}
