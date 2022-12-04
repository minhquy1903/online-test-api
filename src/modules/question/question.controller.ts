import { Question } from './entity';
import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { QuestionService } from './question.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../../decorator';

@Controller('question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

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

  @Post('/create')
  @UseGuards(JwtAuthGuard)
  async create(@Body() body: any, @CurrentUser() user): Promise<any> {
    console.log('body', body);
    return await this.questionService.create({ ...body, userId: user.id });
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(condition: any, @CurrentUser() user): Promise<any[]> {
    return await this.questionService.findAll(condition, user);
  }
}
