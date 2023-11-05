import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateBookCategoryDto {
    @ApiProperty({example: "Traslated book", description: "Category'name of the book"})
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({example: "the traslated book which has all ", description: "Additional info about the category"})
    @IsNotEmpty()
    @IsString()
    description: string;
}
