import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './models/admin.model';
import { JwtModule } from '@nestjs/jwt';
import { Role } from '../role/models/role.entity';
import { RoleModule } from '../role/role.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Admin, Role]),
    JwtModule.register({}),
    RoleModule,
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
