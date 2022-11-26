import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntityId } from 'typeorm/repository/EntityId';
import { BaseService } from '../core/base/base.service';
import { Test } from './entity';

@Injectable()
export class TestService extends BaseService<Test> {
  constructor(
    @InjectRepository(Test)
    private usersRepo: Repository<Test>,
  ) {
    super(usersRepo);
  }

  async update(id: EntityId, data: any): Promise<any> {
    return null;
  }
}
