import { Module } from '@nestjs/common';
import { WorkerTypeService } from './worker_type.service';
import { WorkerTypeController } from './worker_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { WorkerType } from './models/worker_type.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([WorkerType]), JwtModule.register({}),],
  controllers: [WorkerTypeController],
  providers: [WorkerTypeService],
})
export class WorkerTypeModule {}
