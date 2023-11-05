import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { BookCategoryService } from './book_category.service';
import { CreateBookCategoryDto } from './dto/create-book_category.dto';
import { UpdateBookCategoryDto } from './dto/update-book_category.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BookCategory } from './models/book_category.model';
import { AdminGuard } from '../guards/admin.guard';

@Controller('book-category')
export class BookCategoryController {
  constructor(private readonly bookCategoryService: BookCategoryService) {}

  @ApiOperation({summary: 'Creating Book_category'})
  @ApiResponse({status: 200, description: 'Dates of created Book_category', type: BookCategory})
  @Post()
  @UseGuards(AdminGuard)
  create(@Body() createBookCategoryDto: CreateBookCategoryDto) {
    return this.bookCategoryService.create(createBookCategoryDto);
  }


  @ApiOperation({summary: 'Getting Book_category'})
  @ApiResponse({status: 200, description: 'List of Book_category', type: [BookCategory]})
  @Get()
  findAll() {
    return this.bookCategoryService.findAll();
  }


  @ApiOperation({summary: 'Getting Book_category by id'})
  @ApiResponse({status: 200, description: 'Book_category', type: BookCategory})
  @Get(':value')
  findOne(@Param('value') id: string) {
    return this.bookCategoryService.findById(+id);
  }


  @ApiOperation({summary: 'Updating Book_category'})
  @ApiResponse({status: 200, description: 'Updated Book_category', type: BookCategory})
  @Put(':id')
  @UseGuards(AdminGuard)
  update(@Param('id') id: string, @Body() updateBookCategoryDto: UpdateBookCategoryDto) {
    return this.bookCategoryService.update(+id, updateBookCategoryDto);
  }


  @ApiOperation({summary: 'Delating Book_category'})
  @ApiResponse({status: 200, description: 'if delated 1 if not 0', type: Number})
  @Delete(':id')
  @UseGuards(AdminGuard)
  remove(@Param('id') id: string) {
    return this.bookCategoryService.remove(+id);
  }
}
