import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateHistoryDto {
    @ApiProperty({example: "History 3", description: "name for History"})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({example: "2", description: "Id of the type of the history"})
    @IsNotEmpty()
    @IsNumber()
    history_type_id: number;

    @ApiProperty({example: "3", description: "Id of the action"})
    @IsOptional()
    @IsNumber()
    action_bought_id: number;

    @ApiProperty({example: "2", description: "Id of the action"})
    @IsOptional()
    @IsNumber()
    action_order_id: number;

    @ApiProperty({example: "ti is additional info", description: "Info about history"})
    @IsOptional()
    @IsString()
    additional_info: string;
}
