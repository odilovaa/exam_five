import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Author } from "../../author/models/author.model";
import { BookPrint } from "../../book_print/models/book_print.model";
import { BookCategory } from "../../book_category/models/book_category.model";
import { Language } from "../../language/models/language.model";
import { Order } from "../../order/models/order.model";


interface BookAttr{
    title: string;
    author_id: string;
    book_print_id: string;
    category_id: string;
    original_language_id: string;
    pages: string;
    published_date: Date;
    writtin_date: Date;
}

Table({tableName: "books"})
export class Book extends Model<Book, BookAttr>{
    @ApiProperty({example: '1', description: "Unique id"})
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({example: "1984", description: "Nema of the book"})
    @Column({
        type: DataType.STRING
    })
    title: string;

    @ApiProperty({example: 1, description: "Id of the author of book"})
    @BelongsTo(() => Author)
    author_id: Author;


    @ApiProperty({example: 1, description: "Id of the book print of book"})
    @BelongsTo(() => BookPrint)
    book_print_id: BookPrint;

    @ApiProperty({example: 1, description: "Id of the category of the book"})
    @BelongsTo(() => BookCategory)
    category_id: BookCategory;

    @ApiProperty({example: 1, description: "Id of the original language of the book"})
    @BelongsTo(() => Language)
    original_language_id: Language;

    @ApiProperty({example: "234", description: "pages number of the book"})
    @Column({
        type: DataType.STRING
    })
    pages: string;

    @ApiProperty({example: "1111-22-33", description: "Date published of the book"})
    @Column({
        type: DataType.DATE
    })
    published_date: Date;

    @ApiProperty({example: "1111-22-33", description: "Date written of the book"})
    @Column({
        type: DataType.DATE
    })
    writtin_date: Date;

    @HasMany(() => Order)
    orders: Order[]
}
