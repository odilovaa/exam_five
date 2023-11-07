import { Module } from '@nestjs/common';
import { HistoryService } from './history.service';
import { HistoryController } from './history.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { History } from './models/history.model';
import { Order } from '../order/models/order.model';
import { BoughtProduct } from '../bought_product/models/bought_product.model';
import { HistoryType } from '../history_type/models/history_type.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([History, Order, BoughtProduct, HistoryType]), JwtModule.register({})],
  controllers: [HistoryController],
  providers: [HistoryService],
})
export class HistoryModule {}
