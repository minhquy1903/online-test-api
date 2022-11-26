import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../core';

@Entity()
export class Test extends BaseEntity {
  @Column()
  name: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'subject_id' })
  subjectId: string;

  @Column()
  type: number;
}
