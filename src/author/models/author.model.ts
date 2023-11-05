import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Book } from "../../book/models/book.entity";


interface AuthorAttr {
    full_name: string;
    birth_date: Date;
    dearth_date: Date;
    email: string;
    phone_number: string;
    came_from: string;
    additional_info: string;
    photo: string;
}

Table({tableName: "authors"})
export class Author extends Model<Author, AuthorAttr>{
    @ApiProperty({example: '1', description: "Author's id"})
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({example: "John Doe", description: "Author's full name"})
    @Column({
        type: DataType.STRING
    })
    full_name: string;

    @ApiProperty({example: "1982", description: "Author's birth date"})
    @Column({
        type: DataType.DATE
    })
    birth_date: Date;

    @ApiProperty({example: "1999", description: "Author's dearth date"})
    @Column({
        type: DataType.DATE
    })
    dearth_date: Date;

    @ApiProperty({example: "johndoe@gmail.com", description: "Author's email address if additional"})
    @Column({
        type: DataType.STRING
    })
    email: string;

    @ApiProperty({example: "+998912345678", description: "Author's phone number "})
    @Column({
        type: DataType.STRING
    })
    phone_number: string;

    @ApiProperty({example: "Bukhara", description: "Author's Hometown"})
    @Column({
        type: DataType.STRING
    })
    came_from: string;

    @ApiProperty({example: "He wrote his most books about War 2", description: "Info about Author"})
    @Column({
        type: DataType.STRING
    })
    additional_info: string;

    @ApiProperty({example: "asdf0943jref", description: "Photo of Author"})
    @Column({
        type: DataType.STRING
    })
    photo: string;

    @HasMany(() => Book)
    books: Book[]
}
