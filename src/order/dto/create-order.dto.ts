import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateOrderDto {
    @ApiProperty({example: "Order 1", description: "Title or name for order"})
    @IsOptional()
    @IsString()
    title: string;

    @ApiProperty({example: 2, description: "Id of the book which client ordred"})
    @IsNotEmpty()
    @IsNumber()
    book_id: number; 

    @ApiProperty({example: 5, description: "Id of the worker who responsble for this order"})
    @IsNotEmpty()
    @IsNumber()
    worker_id: number;

    @ApiProperty({example: "2345-12-23", description: "In this date order will ready"})
    @IsNotEmpty()
    @IsDate()
    deadline_date: Date;

    @ApiProperty({example: 2, description: "Id of the client who ordred this"})
    @IsNotEmpty()
    @IsDate()
    client_id: string;

    @ApiProperty({example: "5000", description: "the quantity of the product"})
    @IsNotEmpty()
    @IsString()
    quantity: string;

    @ApiProperty({example: "English", description: "Id of the language in which book will published"})
    @IsNotEmpty()
    @IsNumber()
    publishing_language_id: number;

    @ApiProperty({example: 20000, description: "the price for one book"})
    @IsNotEmpty()
    @IsNumber()
    price_for_one: number;

    @ApiProperty({example: 20000000, description: "the price for the order"})
    @IsNotEmpty()
    @IsNumber()
    total_price: number;
}
