import { Module } from '@nestjs/common';
import { HistoryTypeService } from './history_type.service';
import { HistoryTypeController } from './history_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { HistoryType } from './models/history_type.model';

@Module({
  imports: [SequelizeModule.forFeature([HistoryType])],
  controllers: [HistoryTypeController],
  providers: [HistoryTypeService],
})
export class HistoryTypeModule {}
