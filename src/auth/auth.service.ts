import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) { }

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

  async getAuthenticatedUser(username: string, password: string) {
    try {
      const user = await this.usersService.getUser(username);

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

      const payload = { username };

      const accessToken = this.jwtService.sign(payload);

      return { accessToken };

    } catch (err) {
      throw new HttpException(
        'Please check your credentials!',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
