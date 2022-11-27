import { QuestionDto } from './question.dto';

export class TestDtoRequest {
  name?: string;
  userId: string;
  subjectId?: number;
  type?: number;
  id: string;
  questions?: QuestionDto[];
}
