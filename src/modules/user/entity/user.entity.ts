import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../core';

@Entity()
export class User extends BaseEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  type: number;
}
