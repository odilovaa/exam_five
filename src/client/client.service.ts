import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './models/client.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ClientService {
  constructor(@InjectModel(Client) private ClientRepo: typeof Client){}

  async create(createClientDto: CreateClientDto) {
    const newClient = await this.ClientRepo.create(createClientDto);
    return newClient;
  }

  async findAll() {
    const client = await this.ClientRepo.findAll({include: {all: true}});
    return client;
  }

  async findById(id: number) {
    const client = await this.ClientRepo.findOne({where: {id}});
    return client;
  }

  async update(id: number, updateClientDto : UpdateClientDto) {
    const client = await this.ClientRepo.update(updateClientDto, {where: {id}, returning: true});
    return client[1][0];
  }

  async remove(id: number) {
    const client = await this.ClientRepo.destroy({where: {id}})
    return client;
  }
}
