import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { BookPrintService } from './book_print.service';
import { CreateBookPrintDto } from './dto/create-book_print.dto';
import { UpdateBookPrintDto } from './dto/update-book_print.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BookPrint } from './models/book_print.model';
import { AdminGuard } from '../guards/admin.guard';

@Controller('book-print')
export class BookPrintController {
  constructor(private readonly bookPrintService: BookPrintService) {}

  @ApiOperation({summary: 'Creating BookPrint'})
  @ApiResponse({status: 200, description: 'Dates of created BookPrint', type: BookPrint})
  @Post()
  @UseGuards(AdminGuard)
  create(@Body() createBookPrintDto: CreateBookPrintDto) {
    return this.bookPrintService.create(createBookPrintDto);
  }


  @ApiOperation({summary: 'Getting BookPrint'})
  @ApiResponse({status: 200, description: 'List of BookPrint', type: [BookPrint]})
  @Get()
  findAll() {
    return this.bookPrintService.findAll();
  }


  @ApiOperation({summary: 'Getting BookPrint by id'})
  @ApiResponse({status: 200, description: 'BookPrint', type: BookPrint})
  @Get(':value')
  findOne(@Param('value') id: string) {
    return this.bookPrintService.findById(+id);
  }


  @ApiOperation({summary: 'Updating BookPrint'})
  @ApiResponse({status: 200, description: 'Updated BookPrint', type: BookPrint})
  @Put(':id')
  @UseGuards(AdminGuard)
  update(@Param('id') id: string, @Body() updateBookPrintDto: UpdateBookPrintDto) {
    return this.bookPrintService.update(+id, updateBookPrintDto);
  }


  @ApiOperation({summary: 'Delating BookPrint'})
  @ApiResponse({status: 200, description: 'if delated 1 if not 0', type: Number})
  @Delete(':id')
  @UseGuards(AdminGuard)
  remove(@Param('id') id: string) {
    return this.bookPrintService.remove(+id);
  }
}
