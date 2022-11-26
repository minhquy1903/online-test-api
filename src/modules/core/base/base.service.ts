import { Entity, Repository } from 'typeorm';
import { EntityId } from 'typeorm/repository/EntityId';
import { IBaseService } from '../../interfaces';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException } from 'src/utils/exception';

export class BaseService<T> implements IBaseService<T> {
  constructor(
    @InjectRepository('' as any)
    private repository: Repository<T>,
  ) {}

  async findAll(): Promise<T[]> {
    return await this.repository.find();
  }

  async findOneBy(condition: any): Promise<T> {
    return await this.repository.findOneBy(condition);
  }

  async findBy(condition: any): Promise<T[]> {
    return await this.repository.findBy(condition);
  }

  async count(condition: any): Promise<number> {
    return await this.repository.countBy(condition);
  }

  async create(data: any): Promise<T> {
    try {
      return await await this.repository.save(data);
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }

  async update(id: EntityId, data: any): Promise<any> {
    return await this.repository.update(id, data);
  }

  async delete(id: EntityId): Promise<any> {
    return this.repository.delete(id);
  }
}
