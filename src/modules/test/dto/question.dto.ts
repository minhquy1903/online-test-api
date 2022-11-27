import { OptionDto } from './option.dto';

export class QuestionDto {
  testId?: string;
  content: string;
  type: number;
  options?: OptionDto[];
}
