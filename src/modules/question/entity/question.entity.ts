import { IsString } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../core';

@Entity()
export class Question extends BaseEntity {
  @Column({ name: 'ordinal_number' })
  ordinalNumber: number;

  @Column()
  @IsString()
  content: string;

  @Column()
  images: string;

  @Column()
  type: number;
}
