import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Order } from './models/order.model';
import { ClientAdminGuard } from '../guards/clientadmin.guard';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @ApiOperation({summary: 'Creating Order'})
  @ApiResponse({status: 200, description: 'Dates of created Order', type: Order})
  @Post()
  @UseGuards(ClientAdminGuard)
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }


  @ApiOperation({summary: 'Getting Order'})
  @ApiResponse({status: 200, description: 'List of Order', type: [Order]})
  @Get()
  @UseGuards(ClientAdminGuard)
  findAll() {
    return this.orderService.findAll();
  }


  @ApiOperation({summary: 'Getting Order by id'})
  @ApiResponse({status: 200, description: 'Order', type: Order})
  @Get(':value')
  @UseGuards(ClientAdminGuard)
  findOne(@Param('value') id: string) {
    return this.orderService.findById(+id);
  }


  @ApiOperation({summary: 'Updating Order'})
  @ApiResponse({status: 200, description: 'Updated Order', type: Order})
  @Put(':id')
  @UseGuards(ClientAdminGuard)
  update(@Param('id') id: string, @Body() UpdateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+id, UpdateOrderDto);
  }


  @ApiOperation({summary: 'Delating Order'})
  @ApiResponse({status: 200, description: 'if delated 1 if not 0', type: Number})
  @Delete(':id')
  @UseGuards(ClientAdminGuard)
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}
