import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBookPrintDto } from './create-book_print.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateBookPrintDto extends PartialType(CreateBookPrintDto) {
    @ApiProperty({example: "hardtitled book", description: "Print'name of the book"})
    @IsOptional()
    @IsString()
    title: string;

    @ApiProperty({example: "it is  hardtitled book", description: "Additional info about the book print"})
    @IsOptional()
    @IsString()
    description: string;
}
