import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './models/book.entity';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book) private BookRepo: typeof Book){}

  async create(createBookDto: CreateBookDto) {
    const newBook = await this.BookRepo.create(createBookDto);
    return newBook;
  }

  async findAll() {
    const book = await this.BookRepo.findAll({include: {all: true}});
    return book;
  }

  async findById(id: number) {
    const book = await this.BookRepo.findOne({where: {id}});
    return book;
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const book = await this.BookRepo.update(updateBookDto, {where: {id}, returning: true});
    return book[1][0];
  }

  async remove(id: number) {
    const book = await this.BookRepo.destroy({where: {id}})
    return book;
  }
}
