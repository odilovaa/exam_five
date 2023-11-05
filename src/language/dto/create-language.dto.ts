import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateLanguageDto {
    @ApiProperty({example: "English", description: "Language'name of the book"})
    @IsNotEmpty()
    @IsString()
    title: string;
}
