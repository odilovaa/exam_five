import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Role } from './models/role.entity';
import { HeadAdminGuard } from '../guards/headadmin.guard';

@Controller('role')
export class RoleController {
  constructor(private readonly rolesService: RoleService) {}

  @ApiOperation({summary: 'Creating Role'})
  @ApiResponse({status: 200, description: 'Dates of created role', type: Role})
  @Post()
  @UseGuards(HeadAdminGuard)
  createRole(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.createRole(createRoleDto);
  }


  @ApiOperation({summary: 'Getting Roles'})
  @ApiResponse({status: 200, description: 'List of roles', type: [Role]})
  @Get()
  @UseGuards(HeadAdminGuard)
  findAllRoles() {
    return this.rolesService.findAllRoles();
  }


  @ApiOperation({summary: 'Getting Role by value'})
  @ApiResponse({status: 200, description: 'Role', type: Role})
  @Get(':value')
  @UseGuards(HeadAdminGuard)
  findOne(@Param('value') value: string) {
    return this.rolesService.findByValue(value);
  }


  @ApiOperation({summary: 'Updating Role'})
  @ApiResponse({status: 200, description: 'Updated role', type: Role})
  @Put(':id')
  @UseGuards(HeadAdminGuard)
  updateRole(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.updateRole(+id, updateRoleDto);
  }


  @ApiOperation({summary: 'Delating Role'})
  @ApiResponse({status: 200, description: 'if delated 1 if not 0', type: Number})
  @Delete(':id')
  @UseGuards(HeadAdminGuard)
  removeRole(@Param('id') id: string) {
    return this.rolesService.removeRole(+id);
  }
}
