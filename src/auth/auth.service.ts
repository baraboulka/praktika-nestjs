import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) { }

  async registerUser(registrationData: RegisterDto) {
    const hashedPassword = await bcrypt.hash(registrationData.password, 10);

    try {
      const user = await this.usersService.createUser({
        ...registrationData,
        password: hashedPassword,
      });

      return user;
    } catch (err) {
      throw err;
    }
  }

  async getAuthenticatedUser(userName: string, password: string) {
    try {
      const user = await this.usersService.getUser(userName);

      const isPasswordMatching = await bcrypt.compare(
        password,
        user.password,
      );

      if (!isPasswordMatching) {
        throw new HttpException(
          'Please check your credentials!',
          HttpStatus.BAD_REQUEST,
        );
      }

      return user;
    } catch (err) {
      throw new HttpException(
        'Please check your credentials!',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
