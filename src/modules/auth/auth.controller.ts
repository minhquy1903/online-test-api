import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequest } from './dto/login-request.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() payload: LoginRequest) {
    try {
      return await this.authService.login(payload);
    } catch (error) {
      throw new Error(error);
    }
  }

  // @UseGuards(JwtAuthGuard)
  @Post('register')
  async register(@Body() user: any) {
    try {
      return await this.authService.register(user);
    } catch (error) {
      throw new Error(error);
    }
  }
}
