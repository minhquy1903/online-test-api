import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../core';

@Entity()
export class UserTest extends BaseEntity {
  @Column()
  userId: string;

  @Column()
  testId: string;

  @Column()
  start: Date;

  @Column()
  end: Date;

  @Column()
  assignTime: string;

  @Column()
  deadline: string;

  @Column()
  status: number;
}
