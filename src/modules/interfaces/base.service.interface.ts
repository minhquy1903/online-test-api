import { EntityId } from 'typeorm/repository/EntityId';
import { DeleteResult, UpdateResult } from 'typeorm';

export interface IBaseService<T> {
  findAll(): Promise<T[]>;

  findOneBy(condition: any): Promise<T>;

  findBy(condition: any): Promise<T[]>;

  create(data: any): Promise<T>;

  update(id: EntityId, data: any): Promise<UpdateResult>;

  delete(id: EntityId): Promise<DeleteResult>;
}
