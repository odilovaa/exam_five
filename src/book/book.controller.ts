import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Book } from './models/book.entity';
import { AdminGuard } from '../guards/admin.guard';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @ApiOperation({summary: 'Creating Book'})
  @ApiResponse({status: 200, description: 'Dates of created Book', type: Book})
  @Post()
  @UseGuards(AdminGuard)
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }


  @ApiOperation({summary: 'Getting Book'})
  @ApiResponse({status: 200, description: 'List of Book', type: [Book]})
  @Get()
  findAll() {
    return this.bookService.findAll();
  }


  @ApiOperation({summary: 'Getting Book by id'})
  @ApiResponse({status: 200, description: 'Book', type: Book})
  @Get(':value')
  findOne(@Param('value') id: string) {
    return this.bookService.findById(+id);
  }


  @ApiOperation({summary: 'Updating Book'})
  @ApiResponse({status: 200, description: 'Updated Book', type: Book})
  @Put(':id')
  @UseGuards(AdminGuard)
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }


  @ApiOperation({summary: 'Delating Book'})
  @ApiResponse({status: 200, description: 'if delated 1 if not 0', type: Number})
  @Delete(':id')
  @UseGuards(AdminGuard)
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }
}
