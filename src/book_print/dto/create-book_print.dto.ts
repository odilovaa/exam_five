import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateBookPrintDto {
    @ApiProperty({example: "hardtitled book", description: "Print'name of the book"})
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({example: "it is  hardtitled book", description: "Additional info about the book print"})
    @IsNotEmpty()
    @IsString()
    description: string;
}
