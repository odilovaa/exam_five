import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { Worker } from './models/worker.model';
import { LoginWorkerdto } from './dto/loginWorker.dto';
import { CookieGetter } from '../decorators/cookieGetter.decorator';
import { WorkerAdminGuard } from '../guards/workeradmin.guard';
import { UserSelfGuard } from '../guards/user-self.guard';


@Controller('worker')
export class WorkerController {
  constructor(private readonly workerService:WorkerService) {}

  @ApiOperation({summary: 'Creating Worker'})
  @ApiResponse({status: 200, description: 'Dates of Worker', type: Worker})
  @Post('signup')
  @UseGuards(WorkerAdminGuard)
  registration(
    @Body() createWorkerDto: CreateWorkerDto,
    @Res({ passthrough: true}) res: Response
    ) {
    return this.workerService.registration(createWorkerDto, res);
  }


  @ApiOperation({summary: 'Logging in Worker'})
  @ApiResponse({status: 200, description: 'Loged in Worker', type: String})
  @Post('signin')
  login(
    @Body() loginWorkerdto: LoginWorkerdto,
    @Res({ passthrough: true}) res: Response,
  ) {
    return this.workerService.login(loginWorkerdto, res);
  }


  @ApiOperation({summary: 'Logging out Worker'})
  @ApiResponse({status: 200, description: 'Logged out', type: String})
  @Post('signout')
  logout(
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true}) res: Response,
  ) {
    return this.workerService.logout(refreshToken, res);
  }


  @ApiOperation({summary: 'Refreshing the token of Worker'})
  @ApiResponse({status: 200, description: 'New token', type: String})
  @Post('/:id/refresh')
  @UseGuards(UserSelfGuard)
  refresh(
    @Param('id') id: string,
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true}) res: Response,
  ) {
    return this.workerService.refreshToken(+id, refreshToken, res);
  }


  @ApiOperation({summary: 'Finding Worker by search'})
  @ApiResponse({status: 200, description: '[Role]', type: Worker})
  @Get('find')
  @UseGuards(WorkerAdminGuard)
  findAll() {
    return this.workerService.findAll();
  }


  @ApiOperation({summary: 'Finding Worker by id'})
  @ApiResponse({status: 200, description: 'Worker', type: Worker})
  @Get(':id')
  @UseGuards(UserSelfGuard)
  findOne(@Param('id') id: string) {
    return this.workerService.findOne(+id);
  }


  @ApiOperation({summary: 'Updating Worker '})
  @ApiResponse({status: 200, description: 'updated Worker', type: Worker})
  @Patch(':id')
  @UseGuards(WorkerAdminGuard)
  update(@Param('id') id: string, @Body() updateWorkerDto: UpdateWorkerDto) {
    return this.workerService.update(+id, updateWorkerDto);
  }


  @ApiOperation({summary: 'Delating Worker'})
  @ApiResponse({status: 200, description: 'Worker delated', type: String})
  @Delete(':id')
  @UseGuards(WorkerAdminGuard)
  remove(@Param('id') id: string) {
    return this.workerService.remove(+id);
  }
}
