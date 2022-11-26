// import { JwtAuthGuard } from './../../auth/jwt-auth.guard';
import { Body, Delete, Get, Post, Put } from '@nestjs/common';
import { BadRequestException } from 'src/utils/exception';
import { EntityId } from 'typeorm/repository/EntityId';
import { BaseService } from './base.service';

export class BaseController<T> {
  constructor(private baseService: BaseService<T>) {}

  @Get()
  // @UseGuards(JwtAuthGuard)
  findAll(): Promise<T[]> {
    try {
      return this.baseService.findAll();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Get(':id')
  findOneBy(condition: T): Promise<T> {
    return this.baseService.findOneBy(condition);
  }

  @Get('find-by')
  findBy(condition: T): Promise<T[]> {
    return this.baseService.findBy(condition);
  }

  @Get('count')
  count(condition: T): Promise<number> {
    return this.baseService.count(condition);
  }

  @Post()
  async create(@Body() body: T): Promise<T> {
    try {
      return this.baseService.create(body);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Put(':id')
  async update(id: EntityId, @Body() data: T): Promise<T> {
    return await this.baseService.update(id, data);
  }

  @Delete(':id')
  async delete(id: EntityId): Promise<T> {
    return await this.baseService.delete(id);
  }
}
