import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../core/base/base.service';
import { User } from './entity/user.entity';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {
    super(usersRepo);
  }

  async findOne(condition: any): Promise<any> {
    try {
      return await this.usersRepo.findOneBy(condition);
    } catch (error) {
      throw new Error(error);
    }
  }
}
