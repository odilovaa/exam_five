import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CreateHistoryTypeDto {
    @ApiProperty({example: "Order history", description: "Category'name of the book"})
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({example: "it is the orker history ", description: "Additional info about the history_type"})
    @IsOptional()
    @IsString()
    description: string;
}
