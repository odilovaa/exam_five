import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateClientTypeDto } from './create-client_type.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateClientTypeDto extends PartialType(CreateClientTypeDto) {
    @ApiProperty({example: "Company", description: "Type'name of the client"})
    @IsOptional()
    @IsString()
    title: string;

    @ApiProperty({example: "it is company ", description: "Additional info about the type"})
    @IsOptional()
    @IsString()
    description: string;
}
