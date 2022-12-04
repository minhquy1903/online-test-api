import { IsString } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../core';

@Entity()
export class Question extends BaseEntity {
  @Column()
  @IsString()
  question: string;

  @Column()
  images: string;

  @Column()
  type: number;

  @Column()
  a: string;

  @Column()
  b: string;

  @Column()
  c: string;

  @Column()
  d: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'correct_answer' })
  correctAnswer: string;
}
