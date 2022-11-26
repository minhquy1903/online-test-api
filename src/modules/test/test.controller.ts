import { Controller } from '@nestjs/common';
import { BaseController } from '../core/base/base.controller';
import { TestService } from './test.service';

@Controller('tests')
export class TestController extends BaseController<any> {
  constructor(private testService: TestService) {
    super(testService);
  }
}
