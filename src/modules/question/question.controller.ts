import { Question } from './entity';
import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { BaseController } from '../core/base/base.controller';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController extends BaseController<any> {
  constructor(private questionService: QuestionService) {
    super(questionService);
  }

  @Get('/alo')
  async findQuestionByName(@Query('search') search: string): Promise<{
    message: string;
    data: Question[];
  }> {
    const result = await this.questionService.findQuestionByName(search);
    return {
      message: 'success',
      data: result,
    };
  }

  @Post('create')
  async create(@Body() body: any): Promise<Question> {
    console.log(body);
    return this.questionService.create(body);
  }
}
