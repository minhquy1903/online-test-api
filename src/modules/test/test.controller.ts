import { Controller, Get } from '@nestjs/common';
import { BaseController } from '../core/base/base.controller';
import { Test } from './entity';
import { TestService } from './test.service';

@Controller('tests')
export class TestController extends BaseController<Test> {
  constructor(private testService: TestService) {
    super(testService);
  }
}
