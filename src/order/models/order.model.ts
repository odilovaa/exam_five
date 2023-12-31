import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Book } from "../../book/models/book.model";
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

@Table({tableName: "orders"})
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
    @ForeignKey(() => Book)
    @Column({
        type: DataType.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    category_id: number;

    @BelongsTo(() => Book)
    book: Book;

    @ApiProperty({example: 2, description: "Id of the client who ordred this"})
    @ForeignKey(() => Client)
    @Column({
        type: DataType.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    client_id: number;

    @BelongsTo(() => Client)
    client: Client;

    @ApiProperty({example: 5, description: "Id of the worker who responsble for this order"})
    @ForeignKey(() => Worker)
    @Column({
        type: DataType.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    worker_id: number;

    @BelongsTo(() => Worker)
    worker: Worker;

    @ApiProperty({example: "2345-12-23", description: "In this date order will ready"})
    @Column({
        type: DataType.DATE
    })
    deadline_date: Date;

    @ApiProperty({example: "English", description: "Id of the language in which book will published"})
    @ForeignKey(() => Language)
    @Column({
        type: DataType.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    publishing_language_id: number;

    @BelongsTo(() => Language)
    publishing_language: Language;

    @ApiProperty({example: "5000", description: "the quantity of the product"})
    @Column({
        type: DataType.STRING
    })
    quantity: string;

    @ApiProperty({example: 20000, description: "the price for one book"})
    @Column({
        type: DataType.INTEGER
    })
    price_for_one: number;

    @ApiProperty({example: 20000000, description: "the price for the order"})
    @Column({
        type: DataType.INTEGER
    })
    total_price: number;

    @HasMany(() => History)
    histories: History[]
}
