import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateHistoryDto } from './create-history.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateHistoryDto extends PartialType(CreateHistoryDto) {
    @ApiProperty({example: "History 3", description: "name for History"})
    @IsOptional()
    @IsString()
    name: string;

    @ApiProperty({example: "2", description: "Id of the type of the history"})
    @IsOptional()
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
