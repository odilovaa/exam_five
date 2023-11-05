import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './models/order.model';
import { Book } from '../book/models/book.entity';
import { Client } from '../client/models/client.model';
import { Language } from '../language/models/language.model';

@Module({
  imports: [SequelizeModule.forFeature([Order, Book, Client, Language, Worker])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
