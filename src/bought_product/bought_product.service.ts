import { Injectable } from '@nestjs/common';
import { CreateBoughtProductDto } from './dto/create-bought_product.dto';
import { UpdateBoughtProductDto } from './dto/update-bought_product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { BoughtProduct } from './models/bought_product.model';

@Injectable()
export class BoughtProductService {
  constructor(@InjectModel(BoughtProduct) private BoughtProductRepo: typeof BoughtProduct){}

  async create(createBoughtProductDto: CreateBoughtProductDto) {
    const newBoughtProduct = await this.BoughtProductRepo.create(createBoughtProductDto);
    return newBoughtProduct;
  }

  async findAll() {
    const boughtProduct = await this.BoughtProductRepo.findAll({include: {all: true}});
    return boughtProduct;
  }

  async findById(id: number) {
    const boughtProduct = await this.BoughtProductRepo.findOne({where: {id}});
    return boughtProduct;
  }

  async update(id: number, updateBoughtProductDto : UpdateBoughtProductDto) {
    const boughtProduct = await this.BoughtProductRepo.update(updateBoughtProductDto, {where: {id}, returning: true});
    return boughtProduct[1][0];
  }

  async remove(id: number) {
    const boughtProduct = await this.BoughtProductRepo.destroy({where: {id}})
    return boughtProduct;
  }
}
