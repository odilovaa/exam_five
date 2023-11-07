import { Module } from '@nestjs/common';
import { BookCategoryService } from './book_category.service';
import { BookCategoryController } from './book_category.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { BookCategory } from './models/book_category.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([BookCategory]), JwtModule.register({}),],
  controllers: [BookCategoryController],
  providers: [BookCategoryService],
})
export class BookCategoryModule {}
