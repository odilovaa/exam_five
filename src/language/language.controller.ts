import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { LanguageService } from './language.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Language } from './models/language.model';
import { AdminGuard } from '../guards/admin.guard';

@Controller('language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @ApiOperation({summary: 'Creating language'})
  @ApiResponse({status: 200, description: 'Dates of created language', type: Language})
  @Post()
  @UseGuards(AdminGuard)
  create(@Body() createLanguageDto: CreateLanguageDto) {
    return this.languageService.create(createLanguageDto);
  }


  @ApiOperation({summary: 'Getting language'})
  @ApiResponse({status: 200, description: 'List of language', type: [Language]})
  @Get()
  @UseGuards(AdminGuard)
  findAll() {
    return this.languageService.findAll();
  }


  @ApiOperation({summary: 'Getting language by id'})
  @ApiResponse({status: 200, description: 'language', type: Language})
  @Get(':value')
  @UseGuards(AdminGuard)
  findOne(@Param('value') id: string) {
    return this.languageService.findById(+id);
  }


  @ApiOperation({summary: 'Updating language'})
  @ApiResponse({status: 200, description: 'Updated language', type: Language})
  @Put(':id')
  @UseGuards(AdminGuard)
  update(@Param('id') id: string, @Body() updateLanguageDto: UpdateLanguageDto) {
    return this.languageService.update(+id, updateLanguageDto);
  }


  @ApiOperation({summary: 'Delating language'})
  @ApiResponse({status: 200, description: 'if delated 1 if not 0', type: Number})
  @Delete(':id')
  @UseGuards(AdminGuard)
  remove(@Param('id') id: string) {
    return this.languageService.remove(+id);
  }
}
