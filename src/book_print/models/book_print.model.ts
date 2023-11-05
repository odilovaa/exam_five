import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Book } from "../../book/models/book.entity";

interface BookPrintAttr{
    title: symbol;
    description: string;
}

Table({tableName: "book_prints"})
export class BookPrint extends Model<BookPrint, BookPrintAttr>{
    @ApiProperty({example: '1', description: "Role's id"})
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({example: "hardtitled book", description: "Print'name of the book"})
    @Column({
        type: DataType.STRING,
        unique: true,
    })
    title: string;

    @ApiProperty({example: "it is  hardtitled book", description: "Additional info about the book print"})
    @Column({
        type: DataType.STRING,
    })
    description: string;

    @HasMany(() => Book)
    books: Book[]
}
