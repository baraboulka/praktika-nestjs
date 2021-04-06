import { Body, Controller, HttpCode, Post, Req } from '@nestjs/common';
import { Request } from 'express';

import { User } from 'src/users/schemas/user.schema';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

export interface AuthUserRequest extends Request {
  user: User;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  async registerUser(@Body() registrationData: RegisterDto) {
    return this.authService.registerUser(registrationData);
  }

  @HttpCode(200)
  // @UseGuards(LocalAuthGuard)
  @Post('login')
  async loginUser(@Body() request) {
    return await this.authService.getAuthenticatedUser(request.username, request.password);
    // return await this.authService.loginUser(request);
  }
}
