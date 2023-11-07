import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Book } from "../../book/models/book.model";
import { Order } from "../../order/models/order.model";

interface LanguageAttr{
    title: string
}

@Table({tableName: 'languages'})
export class Language extends Model<Language, LanguageAttr>{
    @ApiProperty({example: '1', description: "Role's id"})
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({example: "English", description: "Language'name of the book"})
    @Column({
        type: DataType.STRING,
        unique: true,
    })
    title: string;

    @HasMany(() => Book)
    books: Book[]

    @HasMany(() => Order)
    orders: Order[]
}
