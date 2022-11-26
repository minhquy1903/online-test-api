import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../core/base/base.service';
import { Users } from './entity/user.entity';

@Injectable()
export class UserService extends BaseService<Users> {
  constructor(
    @InjectRepository(Users)
    private usersRepo: Repository<Users>,
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
