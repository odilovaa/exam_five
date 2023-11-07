import { Module } from '@nestjs/common';
import { BoughtProductService } from './bought_product.service';
import { BoughtProductController } from './bought_product.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { BoughtProduct } from './models/bought_product.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([BoughtProduct]), JwtModule.register({}),],
  controllers: [BoughtProductController],
  providers: [BoughtProductService],
})
export class BoughtProductModule {}
