import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model } from "sequelize-typescript";
import { History } from "../../history/models/history.model";


interface BoughtProductAttr {
    name: string;
    quantity: string;
    price_of_one: string;
    total_price: string;
    description: string;
}


export class BoughtProduct extends Model<BoughtProduct, BoughtProductAttr>{
    @ApiProperty({example: 1, description: "Unique ID"})
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: string;

    @ApiProperty({example: "Blue ink", description: "Name of the product"})
    @Column({
        type: DataType.STRING,
    })
    name: string;

    @ApiProperty({example: "10 L", description: "Quantity of the Product"})
    @Column({
        type: DataType.STRING,
    })
    quantity: string;

    @ApiProperty({example: "10 $", description: "Price of the one product"})
    @Column({
        type: DataType.STRING,
    })
    price_of_one: string;

    @ApiProperty({example: "500$", description: "Ovreall price of the product"})
    @Column({
        type: DataType.STRING,
    })
    total_price: string;

    @ApiProperty({example: "fa;ljds;fiow", description: "additional info about the product"})
    @Column({
        type: DataType.STRING,
    })
    description: string;

    @HasMany(() => History)
    histories: History[]
}
