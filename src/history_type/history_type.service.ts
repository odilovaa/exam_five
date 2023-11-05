import { Injectable } from '@nestjs/common';
import { CreateHistoryTypeDto } from './dto/create-history_type.dto';
import { UpdateHistoryTypeDto } from './dto/update-history_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { HistoryType } from './models/history_type.model';

@Injectable()
export class HistoryTypeService {
  constructor(@InjectModel(HistoryType) private history_typeRepo: typeof HistoryType){}

  async create(createHistoryTypeDto: CreateHistoryTypeDto) {
    const newHistoryType = await this.history_typeRepo.create(createHistoryTypeDto);
    return newHistoryType;
  }

  async findAll() {
    const historyType = await this.history_typeRepo.findAll({include: {all: true}});
    return historyType;
  }

  async findById(id: number) {
    const historyType = await this.history_typeRepo.findOne({where: {id}});
    return historyType;
  }

  async update(id: number, updateHistoryTypeDto : UpdateHistoryTypeDto) {
    const historyType = await this.history_typeRepo.update(updateHistoryTypeDto, {where: {id}, returning: true});
    return historyType[1][0];
  }

  async remove(id: number) {
    const historyType = await this.history_typeRepo.destroy({where: {id}})
    return historyType;
  }
}
