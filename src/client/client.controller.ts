import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Client } from './models/client.model';
import { ClientAdminGuard } from '../guards/clientadmin.guard';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @ApiOperation({summary: 'Creating Client'})
  @ApiResponse({status: 200, description: 'Dates of created Client', type: Client})
  @Post()
  @UseGuards(ClientAdminGuard)
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.create(createClientDto);
  }


  @ApiOperation({summary: 'Getting Client'})
  @ApiResponse({status: 200, description: 'List of Client', type: [Client]})
  @Get()
  @UseGuards(ClientAdminGuard)
  findAll() {
    return this.clientService.findAll();
  }


  @ApiOperation({summary: 'Getting Client by id'})
  @ApiResponse({status: 200, description: 'Client', type: Client})
  @Get(':value')
  @UseGuards(ClientAdminGuard)
  findOne(@Param('value') id: string) {
    return this.clientService.findById(+id);
  }


  @ApiOperation({summary: 'Updating Client'})
  @ApiResponse({status: 200, description: 'Updated Client', type: Client})
  @Put(':id')
  @UseGuards(ClientAdminGuard)
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientService.update(+id, updateClientDto);
  }


  @ApiOperation({summary: 'Delating Client'})
  @ApiResponse({status: 200, description: 'if delated 1 if not 0', type: Number})
  @Delete(':id')
  @UseGuards(ClientAdminGuard)
  remove(@Param('id') id: string) {
    return this.clientService.remove(+id);
  }
}
