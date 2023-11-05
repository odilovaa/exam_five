import { Injectable } from '@nestjs/common';
import { CreateBookCategoryDto } from './dto/create-book_category.dto';
import { UpdateBookCategoryDto } from './dto/update-book_category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { BookCategory } from './models/book_category.model';

@Injectable()
export class BookCategoryService {
  constructor(@InjectModel(BookCategory) private book_categoryRepo: typeof BookCategory){}

  async create(createBookCategoryDto: CreateBookCategoryDto) {
    const newBook_category = await this.book_categoryRepo.create(createBookCategoryDto);
    return newBook_category;
  }

  async findAll() {
    const book_categories = await this.book_categoryRepo.findAll({include: {all: true}});
    return book_categories;
  }

  async findById(id: number) {
    const book_category = await this.book_categoryRepo.findOne({where: {id}});
    return book_category;
  }

  async update(id: number, updateBookCategoryDto : UpdateBookCategoryDto) {
    const book_category = await this.book_categoryRepo.update(updateBookCategoryDto, {where: {id}, returning: true});
    return book_category[1][0];
  }

  async remove(id: number) {
    const book_category = await this.book_categoryRepo.destroy({where: {id}})
    return book_category;
  }
}
