import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateHistoryTypeDto } from './create-history_type.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateHistoryTypeDto extends PartialType(CreateHistoryTypeDto) {
    @ApiProperty({example: "Order history", description: "Category'name of the book"})
    @IsOptional()
    @IsString()
    title: string;

    @ApiProperty({example: "it is the orker history ", description: "Additional info about the history_type"})
    @IsOptional()
    @IsString()
    description: string;
}
