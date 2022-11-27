import { Body, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { EntityId } from 'typeorm/repository/EntityId';
import { BaseService } from './base.service';

export class BaseController<T> {
  constructor(private baseService: BaseService<T>) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(): Promise<T[]> {
    return this.baseService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOneBy(@Param('id') id: EntityId): Promise<T> {
    return this.baseService.findOneBy({ id });
  }

  @Get('find-by')
  @UseGuards(JwtAuthGuard)
  findBy(condition: T): Promise<T[]> {
    return this.baseService.findBy(condition);
  }

  @Get('count')
  @UseGuards(JwtAuthGuard)
  count(condition: T): Promise<number> {
    return this.baseService.count(condition);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() body: T): Promise<T> {
    return this.baseService.create(body);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: EntityId, @Body() data: T): Promise<T> {
    console.log(id);
    return await this.baseService.update(id, data);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: EntityId): Promise<T> {
    return await this.baseService.delete(id);
  }
}
