import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateBoughtProductDto {
    @ApiProperty({example: "Blue ink", description: "Name of the product"})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({example: "10 L", description: "Quantity of the Product"})
    @IsNotEmpty()
    @IsString()
    quantity: string;

    
    @ApiProperty({example: "10 $", description: "Price of the one product"})
    @IsNotEmpty()
    @IsString()
    price_of_one: string;

    @ApiProperty({example: "500$", description: "Ovreall price of the product"})
    @IsNotEmpty()
    @IsString()
    total_price: string;

    @ApiProperty({example: "fa;ljds;fiow", description: "additional info about the product"})
    @IsNotEmpty()
    @IsString()
    description: string;
}
