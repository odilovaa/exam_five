import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ClientTypeService } from './client_type.service';
import { CreateClientTypeDto } from './dto/create-client_type.dto';
import { UpdateClientTypeDto } from './dto/update-client_type.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ClientType } from './models/client_type.model';
import { ClientAdminGuard } from '../guards/clientadmin.guard';

@Controller('client-type')
export class ClientTypeController {
  constructor(private readonly clientTypeService: ClientTypeService) {}

  @ApiOperation({summary: 'Creating ClientType'})
  @ApiResponse({status: 200, description: 'Dates of created ClientType', type: ClientType})
  @Post()
  @UseGuards(ClientAdminGuard)
  create(@Body() createClientTypeDto: CreateClientTypeDto) {
    return this.clientTypeService.create(createClientTypeDto);
  }


  @ApiOperation({summary: 'Getting ClientType'})
  @ApiResponse({status: 200, description: 'List of ClientType', type: [ClientType]})
  @Get()
  @UseGuards(ClientAdminGuard)
  findAll() {
    return this.clientTypeService.findAll();
  }


  @ApiOperation({summary: 'Getting ClientType by id'})
  @ApiResponse({status: 200, description: 'ClientType', type: ClientType})
  @Get(':value')
  @UseGuards(ClientAdminGuard)
  findOne(@Param('value') id: string) {
    return this.clientTypeService.findById(+id);
  }


  @ApiOperation({summary: 'Updating ClientType'})
  @ApiResponse({status: 200, description: 'Updated ClientType', type: ClientType})
  @Put(':id')
  @UseGuards(ClientAdminGuard)
  update(@Param('id') id: string, @Body() updateClientTypeDto: UpdateClientTypeDto) {
    return this.clientTypeService.update(+id, updateClientTypeDto);
  }


  @ApiOperation({summary: 'Delating ClientType'})
  @ApiResponse({status: 200, description: 'if delated 1 if not 0', type: Number})
  @Delete(':id')
  @UseGuards(ClientAdminGuard)
  remove(@Param('id') id: string) {
    return this.clientTypeService.remove(+id);
  }
}
