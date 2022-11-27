import { Controller } from '@nestjs/common';
import { BaseController } from '../core/base/base.controller';
import { UserService } from './user.service';

@Controller('users')
export class UserController extends BaseController<any> {
  constructor(userService: UserService) {
    super(userService);
  }
}
