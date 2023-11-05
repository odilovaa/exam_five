import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { HistoryService } from './history.service';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { History } from './models/history.model';
import { AdminGuard } from '../guards/admin.guard';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @ApiOperation({summary: 'Creating History'})
  @ApiResponse({status: 200, description: 'Dates of created History', type: History})
  @Post()
  @UseGuards(AdminGuard)
  create(@Body() createHistoryDto: CreateHistoryDto) {
    return this.historyService.create(createHistoryDto);
  }


  @ApiOperation({summary: 'Getting History'})
  @ApiResponse({status: 200, description: 'List of History', type: [History]})
  @Get()
  @UseGuards(AdminGuard)
  findAll() {
    return this.historyService.findAll();
  }


  @ApiOperation({summary: 'Getting History by id'})
  @ApiResponse({status: 200, description: 'History', type: History})
  @Get(':value')
  @UseGuards(AdminGuard)
  findOne(@Param('value') id: string) {
    return this.historyService.findById(+id);
  }


  @ApiOperation({summary: 'Updating History'})
  @ApiResponse({status: 200, description: 'Updated History', type: History})
  @Put(':id')
  @UseGuards(AdminGuard)
  update(@Param('id') id: string, @Body() updateHistoryDto: UpdateHistoryDto) {
    return this.historyService.update(+id, updateHistoryDto);
  }


  @ApiOperation({summary: 'Delating History'})
  @ApiResponse({status: 200, description: 'if delated 1 if not 0', type: Number})
  @Delete(':id')
  @UseGuards(AdminGuard)
  remove(@Param('id') id: string) {
    return this.historyService.remove(+id);
  }
}
