import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from './create-order.dto';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
    @ApiProperty({example: "Order 1", description: "Title or name for order"})
    @IsOptional()
    @IsString()
    title: string;

    @ApiProperty({example: 2, description: "Id of the book which client ordred"})
    @IsOptional()
    @IsNumber()
    book_id: number; 

    @ApiProperty({example: 5, description: "Id of the worker who responsble for this order"})
    @IsOptional()
    @IsNumber()
    worker_id: number;

    @ApiProperty({example: "2345-12-23", description: "In this date order will ready"})
    @IsOptional()
    @IsDate()
    deadline_date: Date;

    @ApiProperty({example: 2, description: "Id of the client who ordred this"})
    @IsOptional()
    @IsDate()
    client_id: number;

    @ApiProperty({example: "5000", description: "the quantity of the product"})
    @IsOptional()
    @IsString()
    quantity: string;

    @ApiProperty({example: "English", description: "Id of the language in which book will published"})
    @IsOptional()
    @IsNumber()
    publishing_language_id: number;

    @ApiProperty({example: 20000, description: "the price for one book"})
    @IsOptional()
    @IsNumber()
    price_for_one: number;

    @ApiProperty({example: 20000000, description: "the price for the order"})
    @IsOptional()
    @IsNumber()
    total_price: number;
}
