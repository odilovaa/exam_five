import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBoughtProductDto } from './create-bought_product.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateBoughtProductDto extends PartialType(CreateBoughtProductDto) {
    @ApiProperty({example: "Blue ink", description: "Name of the product"})
    @IsOptional()
    @IsString()
    name: string;

    @ApiProperty({example: "10 L", description: "Quantity of the Product"})
    @IsOptional()
    @IsString()
    quantity: string;

    
    @ApiProperty({example: "10 $", description: "Price of the one product"})
    @IsOptional()
    @IsString()
    price_of_one: string;

    @ApiProperty({example: "500$", description: "Ovreall price of the product"})
    @IsOptional()
    @IsString()
    total_price: string;

    @ApiProperty({example: "fa;ljds;fiow", description: "additional info about the product"})
    @IsOptional()
    @IsString()
    description: string;
}
