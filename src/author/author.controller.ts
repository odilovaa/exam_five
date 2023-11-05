import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Author } from './models/author.model';
import { AdminGuard } from '../guards/admin.guard';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @ApiOperation({summary: 'Creating Author'})
  @ApiResponse({status: 200, description: 'Dates of created Author', type: Author})
  @Post()
  @UseGuards(AdminGuard)
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.create(createAuthorDto);
  }


  @ApiOperation({summary: 'Getting Author'})
  @ApiResponse({status: 200, description: 'List of Author', type: [Author]})
  @Get()
  @UseGuards(AdminGuard)
  findAll() {
    return this.authorService.findAll();
  }


  @ApiOperation({summary: 'Getting Author by id'})
  @ApiResponse({status: 200, description: 'Author', type: Author})
  @Get(':value')
  @UseGuards(AdminGuard)
  findOne(@Param('value') id: string) {
    return this.authorService.findById(+id);
  }


  @ApiOperation({summary: 'Updating Author'})
  @ApiResponse({status: 200, description: 'Updated Author', type: Author})
  @Put(':id')
  @UseGuards(AdminGuard)
  update(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorService.update(+id, updateAuthorDto);
  }


  @ApiOperation({summary: 'Delating Author'})
  @ApiResponse({status: 200, description: 'if delated 1 if not 0', type: Number})
  @Delete(':id')
  @UseGuards(AdminGuard)
  remove(@Param('id') id: string) {
    return this.authorService.remove(+id);
  }
}
