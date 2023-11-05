import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from './models/book.entity';
import { Author } from '../author/models/author.model';
import { BookCategory } from '../book_category/models/book_category.model';
import { BookPrint } from '../book_print/models/book_print.model';
import { Language } from '../language/models/language.model';

@Module({
  imports: [SequelizeModule.forFeature([Book, Author, BookCategory, BookPrint, Language])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
