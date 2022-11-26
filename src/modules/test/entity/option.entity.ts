import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../core';

@Entity()
export class Option extends BaseEntity {
  @Column()
  questionId: string;

  @Column()
  text: string;

  @Column()
  image: string;

  @Column()
  isAnswer: boolean;
}
