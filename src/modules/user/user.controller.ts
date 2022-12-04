import { Controller } from '@nestjs/common';
import { BaseController } from '../core/base/base.controller';
import { User } from './entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController extends BaseController<User> {
  constructor(private userService: UserService) {
    super(userService);
  }
}
