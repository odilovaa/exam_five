import { Injectable } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Language } from './models/language.model';

@Injectable()
export class LanguageService {
  constructor(@InjectModel(Language) private languageRepo: typeof Language){}

  async create(createLanguageDto: CreateLanguageDto) {
    const newlanguage = await this.languageRepo.create(createLanguageDto);
    return newlanguage;
  }

  async findAll() {
    const language = await this.languageRepo.findAll({include: {all: true}});
    return language;
  }

  async findById(id: number) {
    const language = await this.languageRepo.findOne({where: {id}});
    return language;
  }

  async update(id: number, updateLanguageDto : UpdateLanguageDto) {
    const language = await this.languageRepo.update(updateLanguageDto, {where: {id}, returning: true});
    return language[1][0];
  }

  async remove(id: number) {
    const language = await this.languageRepo.destroy({where: {id}})
    return language;
  }
}
