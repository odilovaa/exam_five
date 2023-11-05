import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Book } from "../../book/models/book.entity";


interface BookCategoryAttr{
    title: symbol;
    description: string;
}

Table({tableName: "book_categories"})
export class BookCategory extends Model<BookCategory, BookCategoryAttr>{
    @ApiProperty({example: '1', description: "Unique id"})
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({example: 'Traslated book', description: "name of book category"})
    @Column({
        type: DataType.STRING,
        unique: true,
    })
    title: string;

    @ApiProperty({example: 'it is Traslated book', description: " description for book category"})
    @Column({
        type: DataType.STRING,
    })
    description: string;

    @HasMany(() => Book)
    books: Book[]
}
