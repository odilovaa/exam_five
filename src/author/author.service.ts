import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Author } from './models/author.model';

@Injectable()
export class AuthorService {
  constructor(@InjectModel(Author) private AuthorRepo: typeof Author){}

  async create(createAuthorDto: CreateAuthorDto) {
    const newAuthor = await this.AuthorRepo.create(createAuthorDto);
    return newAuthor;
  }

  async findAll() {
    const authors = await this.AuthorRepo.findAll({include: {all: true}});
    return authors;
  }

  async findById(id: number) {
    const author = await this.AuthorRepo.findOne({where: {id}});
    return author;
  }

  async update(id: number, updateAuthorDto : UpdateAuthorDto) {
    const author = await this.AuthorRepo.update(updateAuthorDto, {where: {id}, returning: true});
    return author[1][0];
  }

  async remove(id: number) {
    const author = await this.AuthorRepo.destroy({where: {id}})
    return author;
  }
}
