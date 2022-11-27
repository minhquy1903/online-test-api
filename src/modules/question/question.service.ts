import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../core/base/base.service';
import { Test } from '../test/entity';

@Injectable()
export class QuestionService extends BaseService<Test> {
  constructor(
    @InjectRepository(Test)
    private questionService: Repository<Test>,
  ) {
    super(questionService);
  }
}
