import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { WorkerTypeService } from './worker_type.service';
import { CreateWorkerTypeDto } from './dto/create-worker_type.dto';
import { UpdateWorkerTypeDto } from './dto/update-worker_type.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { WorkerType } from './models/worker_type.model';
import { WorkerAdminGuard } from '../guards/workeradmin.guard';

@Controller('worker-type')
export class WorkerTypeController {
  constructor(private readonly workerTypeService: WorkerTypeService) {}

  @ApiOperation({summary: 'Creating WorkerType'})
  @ApiResponse({status: 200, description: 'Dates of created WorkerType', type: WorkerType})
  @Post()
  @UseGuards(WorkerAdminGuard)
  create(@Body()createWorkerTypeDto: CreateWorkerTypeDto) {
    return this.workerTypeService.create(createWorkerTypeDto);
  }


  @ApiOperation({summary: 'Getting WorkerType'})
  @ApiResponse({status: 200, description: 'List of WorkerType', type: [WorkerType]})
  @Get()
  @UseGuards(WorkerAdminGuard)
  findAll() {
    return this.workerTypeService.findAll();
  }


  @ApiOperation({summary: 'Getting WorkerType by id'})
  @ApiResponse({status: 200, description: 'WorkerType', type: WorkerType})
  @Get(':value')
  @UseGuards(WorkerAdminGuard)
  findOne(@Param('value') id: string) {
    return this.workerTypeService.findById(+id);
  }


  @ApiOperation({summary: 'Updating WorkerType'})
  @ApiResponse({status: 200, description: 'Updated WorkerType', type: WorkerType})
  @Put(':id')
  @UseGuards(WorkerAdminGuard)
  update(@Param('id') id: string, @Body() updateWorkerTypeDto: UpdateWorkerTypeDto) {
    return this.workerTypeService.update(+id, updateWorkerTypeDto);
  }


  @ApiOperation({summary: 'Delating WorkerType'})
  @ApiResponse({status: 200, description: 'if delated 1 if not 0', type: Number})
  @Delete(':id')
  @UseGuards(WorkerAdminGuard)
  remove(@Param('id') id: string) {
    return this.workerTypeService.remove(+id);
  }
}
