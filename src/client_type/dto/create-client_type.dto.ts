import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateClientTypeDto {
    @ApiProperty({example: "Company", description: "Type'name of the client"})
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({example: "it is company ", description: "Additional info about the type"})
    @IsNotEmpty()
    @IsString()
    description: string;
}
