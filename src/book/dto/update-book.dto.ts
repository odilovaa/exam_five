import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBookDto } from './create-book.dto';
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateBookDto extends PartialType(CreateBookDto) {
    @ApiProperty({example: "1984", description: "Nema of the book"})
    @IsOptional()
    @IsString()
    title: string;

    @ApiProperty({example: 1, description: "Id of the author of book"})
    @IsOptional()
    @IsNumber()
    author_id: number;

    @ApiProperty({example: 1, description: "Id of the book print of book"})
    @IsOptional()
    @IsNumber()
    book_print_id: number;

    @ApiProperty({example: 1, description: "Id of the category of the book"})
    @IsOptional()
    @IsNumber()
    category_id: number;

    @ApiProperty({example: 1, description: "Id of the original language of the book"})
    @IsOptional()
    @IsNumber()
    original_language_id: number;

    @ApiProperty({example: "234", description: "pages number of the book"})
    @IsOptional()
    @IsNumber()
    pages: number;

    @ApiProperty({example: "1111-22-33", description: "Date published of the book"})
    @IsOptional()
    @IsDate()
    published_date: Date;

    @ApiProperty({example: "1111-22-33", description: "Date written of the book"})
    @IsOptional()
    @IsDate()
    writtin_date: Date;
}
