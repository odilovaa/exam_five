import { Module } from '@nestjs/common';
import { BookPrintService } from './book_print.service';
import { BookPrintController } from './book_print.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { BookPrint } from './models/book_print.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([BookPrint]), JwtModule.register({})],
  controllers: [BookPrintController],
  providers: [BookPrintService],
})
export class BookPrintModule {}
