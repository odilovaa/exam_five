import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { BoughtProductService } from './bought_product.service';
import { CreateBoughtProductDto } from './dto/create-bought_product.dto';
import { UpdateBoughtProductDto } from './dto/update-bought_product.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BoughtProduct } from './models/bought_product.model';
import { AdminGuard } from '../guards/admin.guard';

@Controller('bought-product')
export class BoughtProductController {
  constructor(private readonly boughtProductService: BoughtProductService) {}

  @ApiOperation({summary: 'Creating BoughtProduct'})
  @ApiResponse({status: 200, description: 'Dates of created BoughtProduct', type: BoughtProduct})
  @Post()
  @UseGuards(AdminGuard)
  create(@Body() createBoughtProductDto: CreateBoughtProductDto) {
    return this.boughtProductService.create(createBoughtProductDto);
  }


  @ApiOperation({summary: 'Getting BoughtProduct'})
  @ApiResponse({status: 200, description: 'List of BoughtProduct', type: [BoughtProduct]})
  @Get()
  @UseGuards(AdminGuard)
  findAll() {
    return this.boughtProductService.findAll();
  }


  @ApiOperation({summary: 'Getting BoughtProduct by id'})
  @ApiResponse({status: 200, description: 'BoughtProduct', type: BoughtProduct})
  @Get(':value')
  @UseGuards(AdminGuard)
  findOne(@Param('value') id: string) {
    return this.boughtProductService.findById(+id);
  }


  @ApiOperation({summary: 'Updating BoughtProduct'})
  @ApiResponse({status: 200, description: 'Updated BoughtProduct', type: BoughtProduct})
  @Put(':id')
  @UseGuards(AdminGuard)
  update(@Param('id') id: string, @Body() updateBoughtProductDto: UpdateBoughtProductDto) {
    return this.boughtProductService.update(+id, updateBoughtProductDto);
  }


  @ApiOperation({summary: 'Delating BoughtProduct'})
  @ApiResponse({status: 200, description: 'if delated 1 if not 0', type: Number})
  @Delete(':id')
  @UseGuards(AdminGuard)
  remove(@Param('id') id: string) {
    return this.boughtProductService.remove(+id);
  }
}
