import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { HistoryTypeService } from './history_type.service';
import { CreateHistoryTypeDto } from './dto/create-history_type.dto';
import { UpdateHistoryTypeDto } from './dto/update-history_type.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { HistoryType } from './models/history_type.model';
import { AdminGuard } from '../guards/admin.guard';

@Controller('history-type')
export class HistoryTypeController {
  constructor(private readonly historyTypeService: HistoryTypeService) {}

  @ApiOperation({summary: 'Creating HistoryType'})
  @ApiResponse({status: 200, description: 'Dates of created HistoryType', type: HistoryType})
  @Post()
  @UseGuards(AdminGuard)
  create(@Body() createHistoryTypeDto: CreateHistoryTypeDto) {
    return this.historyTypeService.create(createHistoryTypeDto);
  }


  @ApiOperation({summary: 'Getting HistoryType'})
  @ApiResponse({status: 200, description: 'List of HistoryType', type: [HistoryType]})
  @Get()
  @UseGuards(AdminGuard)
  findAll() {
    return this.historyTypeService.findAll();
  }


  @ApiOperation({summary: 'Getting HistoryType by id'})
  @ApiResponse({status: 200, description: 'HistoryType', type: HistoryType})
  @Get(':value')
  @UseGuards(AdminGuard)
  findOne(@Param('value') id: string) {
    return this.historyTypeService.findById(+id);
  }


  @ApiOperation({summary: 'Updating HistoryType'})
  @ApiResponse({status: 200, description: 'Updated HistoryType', type: HistoryType})
  @Put(':id')
  @UseGuards(AdminGuard)
  update(@Param('id') id: string, @Body() updateHistoryTypeDto: UpdateHistoryTypeDto) {
    return this.historyTypeService.update(+id, updateHistoryTypeDto);
  }


  @ApiOperation({summary: 'Delating HistoryType'})
  @ApiResponse({status: 200, description: 'if delated 1 if not 0', type: Number})
  @Delete(':id')
  @UseGuards(AdminGuard)
  remove(@Param('id') id: string) {
    return this.historyTypeService.remove(+id);
  }
}
