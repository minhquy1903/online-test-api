import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async save(user: any): Promise<any> {
    const result = await this.usersRepository.save(user);

    return result;
  }

  async findUserByEmail(email: string): Promise<any> {
    const result = await this.usersRepository.findOneBy({ email });

    return result;
  }

  async findOne(condition: any): Promise<any> {
    try {
      return await this.usersRepository.findOneBy(condition);
    } catch (error) {
      throw new Error(error);
    }
  }
}
