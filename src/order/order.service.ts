import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './models/order.model';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order) private OrderRepo: typeof Order){}

  async create(createOrderDto: CreateOrderDto) {
    const newOrder = await this.OrderRepo.create(createOrderDto);
    return newOrder;
  }

  async findAll() {
    const order = await this.OrderRepo.findAll({include: {all: true}});
    return order;
  }

  async findById(id: number) {
    const order = await this.OrderRepo.findOne({where: {id}});
    return order;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const order = await this.OrderRepo.update(updateOrderDto, {where: {id}, returning: true});
    return order[1][0];
  }

  async remove(id: number) {
    const order = await this.OrderRepo.destroy({where: {id}})
    return order;
  }
}
