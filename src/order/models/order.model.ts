import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Book } from "../../book/models/book.entity";
import { Client } from "../../client/models/client.model";
import { Language } from "../../language/models/language.model";
import { History } from "../../history/models/history.model";
import { Worker } from "../../worker/models/worker.model";


interface OrderAttr {
    title: string;
    book_id: number;
    client_id: number;
    worker_id: number;
    deadline_date: Date;
    publishing_language_id: number;
    quantity: string;
    price_for_one: number;
    total_price: number;
}

Table({tableName: "orders"})
export class Order extends Model<Order, OrderAttr>{
    @ApiProperty({example: '1', description: "Unique id"})
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({example: "Order 1", description: "Title or name for order"})
    @Column({
        type: DataType.STRING
    })
    title: string;

    @ApiProperty({example: 2, description: "Id of the book which client ordred"})
    @BelongsTo(() => Book)
    book_id: Book;

    @ApiProperty({example: 2, description: "Id of the client who ordred this"})
    @BelongsTo(() => Client)
    client_id: Client;

    @ApiProperty({example: 5, description: "Id of the worker who responsble for this order"})
    @BelongsTo(() => Worker)
    worker_id: Worker;

    @ApiProperty({example: "2345-12-23", description: "In this date order will ready"})
    @Column({
        type: DataType.DATE
    })
    deadline_date: Date;

    @ApiProperty({example: "English", description: "Id of the language in which book will published"})
    @BelongsTo(() => Language)
    publishing_language_id: Language;

    @ApiProperty({example: "5000", description: "the quantity of the product"})
    @Column({
        type: DataType.STRING
    })
    quantity: string;

    @ApiProperty({example: 20000, description: "the price for one book"})
    @Column({
        type: DataType.NUMBER
    })
    price_for_one: number;

    @ApiProperty({example: 20000000, description: "the price for the order"})
    @Column({
        type: DataType.NUMBER
    })
    total_price: number;

    @HasMany(() => History)
    histories: History[]
}
