import { Controller, Post, UseGuards } from '@nestjs/common';

@Controller('user')
export class UserController {
  //   constructor() {}

  @UseGuards()
  @Post('login')
  async login() {
    // return await this.authService.login({ name: 'Minh Quy', id: 111 });
  }

  @Post('register')
  async register() {
    return;
  }
}
