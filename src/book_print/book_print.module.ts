import { Module } from '@nestjs/common';
import { BookPrintService } from './book_print.service';
import { BookPrintController } from './book_print.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { BookPrint } from './models/book_print.model';

@Module({
  imports: [SequelizeModule.forFeature([BookPrint])],
  controllers: [BookPrintController],
  providers: [BookPrintService],
})
export class BookPrintModule {}
