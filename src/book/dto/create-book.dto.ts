import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBookDto {
    @ApiProperty({example: "1984", description: "Nema of the book"})
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({example: 1, description: "Id of the author of book"})
    @IsNotEmpty()
    @IsNumber()
    author_id: number;

    @ApiProperty({example: 1, description: "Id of the book print of book"})
    @IsNotEmpty()
    @IsNumber()
    book_print_id: number;

    @ApiProperty({example: 1, description: "Id of the category of the book"})
    @IsNotEmpty()
    @IsNumber()
    category_id: number;

    @ApiProperty({example: 1, description: "Id of the original language of the book"})
    @IsNotEmpty()
    @IsNumber()
    original_language_id: number;

    @ApiProperty({example: "234", description: "pages number of the book"})
    @IsNotEmpty()
    @IsNumber()
    pages: number;

    @ApiProperty({example: "1111-22-33", description: "Date published of the book"})
    @IsNotEmpty()
    @IsDate()
    published_date: Date;

    @ApiProperty({example: "1111-22-33", description: "Date written of the book"})
    @IsNotEmpty()
    @IsDate()
    writtin_date: Date;
}
