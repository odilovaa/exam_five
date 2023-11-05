import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateLanguageDto } from './create-language.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateLanguageDto extends PartialType(CreateLanguageDto) {
    @ApiProperty({example: "English", description: "Language'name of the book"})
    @IsOptional()
    @IsString()
    title: string;
}
