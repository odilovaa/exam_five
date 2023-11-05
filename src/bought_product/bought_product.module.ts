import { Module } from '@nestjs/common';
import { BoughtProductService } from './bought_product.service';
import { BoughtProductController } from './bought_product.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { BoughtProduct } from './models/bought_product.model';

@Module({
  imports: [SequelizeModule.forFeature([BoughtProduct])],
  controllers: [BoughtProductController],
  providers: [BoughtProductService],
})
export class BoughtProductModule {}
