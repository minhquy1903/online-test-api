import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { EntityId } from 'typeorm/repository/EntityId';
import { IBaseService } from '../../interfaces';
import { InjectRepository } from '@nestjs/typeorm';

export class BaseService<T> implements IBaseService<T> {
  constructor(
    @InjectRepository('' as any)
    private repository: Repository<T>,
  ) {}

  findAll(): Promise<T[]> {
    return this.repository.find();
  }

  findOneBy(condition: any): Promise<T> {
    return this.repository.findOneBy(condition);
  }

  findBy(condition: any): Promise<T[]> {
    return this.repository.findBy(condition);
  }

  count(condition: any): Promise<number> {
    return this.repository.countBy(condition);
  }

  async create(data: any): Promise<T> {
    return this.repository.save(data);
  }

  async update(id: EntityId, data: any): Promise<UpdateResult> {
    return await this.repository.update(id, data);
  }

  async delete(id: EntityId): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
