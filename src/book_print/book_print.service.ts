import { Injectable } from '@nestjs/common';
import { CreateBookPrintDto } from './dto/create-book_print.dto';
import { UpdateBookPrintDto } from './dto/update-book_print.dto';
import { InjectModel } from '@nestjs/sequelize';
import { BookPrint } from './models/book_print.model';

@Injectable()
export class BookPrintService {
  constructor(@InjectModel(BookPrint) private book_printRepo: typeof BookPrint){}

  async create(createBookPrintDto: CreateBookPrintDto) {
    const newbook_print = await this.book_printRepo.create(createBookPrintDto);
    return newbook_print;
  }

  async findAll() {
    const book_print = await this.book_printRepo.findAll({include: {all: true}});
    return book_print;
  }

  async findById(id: number) {
    const book_print = await this.book_printRepo.findOne({where: {id}});
    return book_print;
  }

  async update(id: number, updateBookPrintDto : UpdateBookPrintDto) {
    const book_print = await this.book_printRepo.update(updateBookPrintDto, {where: {id}, returning: true});
    return book_print[1][0];
  }

  async remove(id: number) {
    const book_print = await this.book_printRepo.destroy({where: {id}})
    return book_print;
  }
}
