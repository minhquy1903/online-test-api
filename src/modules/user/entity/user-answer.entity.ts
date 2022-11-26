import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../core';

@Entity()
export class UserAnswer extends BaseEntity {
  @Column()
  questionId: string;

  @Column()
  userTestId: string;

  @Column()
  optionId: string;
}
