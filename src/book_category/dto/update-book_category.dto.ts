import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBookCategoryDto } from './create-book_category.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateBookCategoryDto extends PartialType(CreateBookCategoryDto) {
    @ApiProperty({example: "Traslated book", description: "Category'name of the book"})
    @IsOptional()
    @IsString()
    title: string;

    @ApiProperty({example: "the traslated book which has all ", description: "Additional info about the category"})
    @IsOptional()
    @IsString()
    description: string;
}
