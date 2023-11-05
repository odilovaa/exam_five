import { Injectable } from '@nestjs/common';
import { CreateClientTypeDto } from './dto/create-client_type.dto';
import { UpdateClientTypeDto } from './dto/update-client_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ClientType } from './models/client_type.model';

@Injectable()
export class ClientTypeService {
  constructor(@InjectModel(ClientType) private clientTypeRepo: typeof ClientType){}

  async create(createClientTypeDto: CreateClientTypeDto) {
    const newClientType = await this.clientTypeRepo.create(createClientTypeDto);
    return newClientType;
  }

  async findAll() {
    const clientType = await this.clientTypeRepo.findAll({include: {all: true}});
    return clientType;
  }

  async findById(id: number) {
    const clientType = await this.clientTypeRepo.findOne({where: {id}});
    return clientType;
  }

  async update(id: number, updateClientTypeDto : UpdateClientTypeDto) {
    const clientType = await this.clientTypeRepo.update(updateClientTypeDto, {where: {id}, returning: true});
    return clientType[1][0];
  }

  async remove(id: number) {
    const clientType = await this.clientTypeRepo.destroy({where: {id}})
    return clientType;
  }
}
