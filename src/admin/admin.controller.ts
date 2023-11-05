import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Admin } from './models/admin.model';
import { Response } from 'express';
import { LoginAdmindto } from './dto/loginAdmin.dto';
import { CookieGetter } from '../decorators/cookieGetter.decorator';
import { UserSelfGuard } from '../guards/user-self.guard';
import { HeadAdminGuard } from '../guards/headadmin.guard';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({summary: 'Creating Admin'})
  @ApiResponse({status: 200, description: 'Dates of Admin', type: Admin})
  @Post('signup')
  @UseGuards(HeadAdminGuard)
  registration(
    @Body() createAdminDto: CreateAdminDto,
    @Res({ passthrough: true}) res: Response
    ) {
    return this.adminService.registration(createAdminDto, res);
  }


  @ApiOperation({summary: 'Logging in admin'})
  @ApiResponse({status: 200, description: 'Loged in admin', type: String})
  @Post('signin')
  login(
    @Body() loginAdmindto: LoginAdmindto,
    @Res({ passthrough: true}) res: Response,
  ) {
    return this.adminService.login(loginAdmindto, res);
  }

  @ApiOperation({summary: 'Activating the admin'})
  @ApiResponse({status: 200, description: '', type: String})
  @Get('activate/:link')
  activate(@Param('link') link: string) {
    return this.adminService.activate(link);
  }


  @ApiOperation({summary: 'Logging out admin'})
  @ApiResponse({status: 200, description: 'Logged out', type: String})
  @Post('signout')
  logout(
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true}) res: Response,
  ) {
    return this.adminService.logout(refreshToken, res);
  }


  @ApiOperation({summary: 'Refreshing the token of admin'})
  @ApiResponse({status: 200, description: 'New token', type: String})
  @Post('/:id/refresh')
  @UseGuards(UserSelfGuard)
  refresh(
    @Param('id') id: string,
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true}) res: Response,
  ) {
    return this.adminService.refreshToken(+id, refreshToken, res);
  }


  @ApiOperation({summary: 'Finding admin by search'})
  @ApiResponse({status: 200, description: '[Role]', type: Admin})
  @Get('find')
  @UseGuards(HeadAdminGuard)
  findAll() {
    return this.adminService.findAll();
  }


  @ApiOperation({summary: 'Finding admin by id'})
  @ApiResponse({status: 200, description: 'Admin', type: Admin})
  @Get(':id')
  @UseGuards(HeadAdminGuard)
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }


  @ApiOperation({summary: 'Updating admin '})
  @ApiResponse({status: 200, description: 'updated admin', type: Admin})
  @Patch(':id')
  @UseGuards(HeadAdminGuard)
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }


  @ApiOperation({summary: 'Delating admin'})
  @ApiResponse({status: 200, description: 'Admin delated', type: String})
  @Delete(':id')
  @UseGuards(HeadAdminGuard)
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
