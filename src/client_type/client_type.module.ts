import { Module } from '@nestjs/common';
import { ClientTypeService } from './client_type.service';
import { ClientTypeController } from './client_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientType } from './models/client_type.model';

@Module({
  imports: [SequelizeModule.forFeature([ClientType])],
  controllers: [ClientTypeController],
  providers: [ClientTypeService],
})
export class ClientTypeModule {}
