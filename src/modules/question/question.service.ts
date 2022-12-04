import { Question } from './entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuestionEnum } from '../../constants';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  async findAll(condition: any, user: any): Promise<Question[]> {
    console.log(condition);

    return await this.questionRepository.find({
      where: { userId: user.id },
    });
  }

  async create(data: any): Promise<Question> {
    console.log('data', data);
    if (data?.type === QuestionEnum.QUIZ_TYPE) {
      return this.questionRepository.save(data);
    }

    return;
  }

  async findQuestionByName(search) {
    return await this.questionRepository.find({
      where: {
        question: search,
      },
    });
  }
}
