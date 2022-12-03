import { Question } from './entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../core/base/base.service';

@Injectable()
export class QuestionService extends BaseService<Question> {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {
    super(questionRepository);
  }

  async create(data: any): Promise<Question> {
    console.log(data);
    return;
  }

  async findQuestionByName(search) {
    return await this.questionRepository.find({
      where: {
        content: search,
      },
    });
  }
}
