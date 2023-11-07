import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Client } from './models/client.model';
import { ClientType } from '../client_type/models/client_type.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Client, ClientType]), JwtModule.register({}),],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
