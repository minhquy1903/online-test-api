import { Controller } from '@nestjs/common';
import { BaseController } from '../core/base/base.controller';
import { TestService } from '../test/test.service';

@Controller('tests')
export class QuestionController extends BaseController<any> {
  constructor(private questionService: TestService) {
    super(questionService);
  }
}
