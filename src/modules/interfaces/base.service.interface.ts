import { EntityId } from 'typeorm/repository/EntityId';

export interface IBaseService<T> {
  findAll(): Promise<T[]>;

  findOneBy(condition: any): Promise<T>;

  findBy(condition: any): Promise<T[]>;

  create(data: any): Promise<T>;

  update(id: EntityId, data: any): Promise<any>;

  delete(id: EntityId): Promise<any>;
}
