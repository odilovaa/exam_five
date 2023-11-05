import { Injectable } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { InjectModel } from '@nestjs/sequelize';
import { History } from './models/history.model';

@Injectable()
export class HistoryService {
  constructor(@InjectModel(History) private historyRepo: typeof History){}

  async create(createHistoryDto: CreateHistoryDto) {
    const newhistory = await this.historyRepo.create(createHistoryDto);
    return newhistory;
  }

  async findAll() {
    const history = await this.historyRepo.findAll({include: {all: true}});
    return history;
  }

  async findById(id: number) {
    const history = await this.historyRepo.findOne({where: {id}});
    return history;
  }

  async update(id: number, updateHistoryDto : UpdateHistoryDto) {
    const history = await this.historyRepo.update(updateHistoryDto, {where: {id}, returning: true});
    return history[1][0];
  }

  async remove(id: number) {
    const history = await this.historyRepo.destroy({where: {id}})
    return history;
  }
}
