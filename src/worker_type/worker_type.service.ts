import { Injectable } from '@nestjs/common';
import { CreateWorkerTypeDto } from './dto/create-worker_type.dto';
import { UpdateWorkerTypeDto } from './dto/update-worker_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { WorkerType } from './models/worker_type.model';

@Injectable()
export class WorkerTypeService {
  constructor(@InjectModel(WorkerType) private workerTypeRepo: typeof WorkerType){}

  async create(createWorkerTypeDto: CreateWorkerTypeDto) {
    const newworkerType = await this.workerTypeRepo.create(createWorkerTypeDto);
    return newworkerType;
  }

  async findAll() {
    const workerType = await this.workerTypeRepo.findAll({include: {all: true}});
    return workerType;
  }

  async findById(id: number) {
    const workerType = await this.workerTypeRepo.findOne({where: {id}});
    return workerType;
  }

  async update(id: number, updateWorkerTypeDto : UpdateWorkerTypeDto) {
    const workerType = await this.workerTypeRepo.update(updateWorkerTypeDto, {where: {id}, returning: true});
    return workerType[1][0];
  }

  async remove(id: number) {
    const workerType = await this.workerTypeRepo.destroy({where: {id}})
    return workerType;
  }
}
