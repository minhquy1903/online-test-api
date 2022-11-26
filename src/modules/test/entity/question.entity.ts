import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../core';

@Entity()
export class Question extends BaseEntity {
  @Column()
  testId: string;

  @Column()
  content: string;

  @Column()
  images: string;

  @Column()
  type: number;
}
