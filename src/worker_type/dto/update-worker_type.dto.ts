import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateWorkerTypeDto } from './create-worker_type.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateWorkerTypeDto extends PartialType(CreateWorkerTypeDto) {
    @ApiProperty({example: "Traslater", description: "Type'name of the worker"})
    @IsOptional()
    @IsString()
    title: string;
}
