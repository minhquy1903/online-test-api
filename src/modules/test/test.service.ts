import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../core/base/base.service';
import { Test } from './entity';

@Injectable()
export class TestService extends BaseService<Test> {
  constructor(
    @InjectRepository(Test)
    private testRepo: Repository<Test>,
  ) {
    super(testRepo);
  }

  
}
