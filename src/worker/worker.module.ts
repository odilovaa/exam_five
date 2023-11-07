import { Module } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { WorkerController } from './worker.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Worker } from './models/worker.model';
import { WorkerType } from '../worker_type/models/worker_type.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Worker, WorkerType]),
  JwtModule.register({}),
],
  controllers: [WorkerController],
  providers: [WorkerService],
})
export class WorkerModule {}
