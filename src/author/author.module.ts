import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Author } from './models/author.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Author]), JwtModule.register({}),],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorModule {}
