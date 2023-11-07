import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './models/order.model';
import { Book } from '../book/models/book.model';
import { Client } from '../client/models/client.model';
import { Language } from '../language/models/language.model';
import { Worker } from '../worker/models/worker.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Order, Book, Client, Language, Worker]), JwtModule.register({}),],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
