import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model } from "sequelize-typescript";
import { History } from "../../history/models/history.model";

interface HistoryTypeAttr{
    title: string;
    description: string;
}


export class HistoryType extends Model<HistoryType, HistoryTypeAttr>{
    @ApiProperty({example: '1', description: "Role's id"})
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({example: "Order history", description: "Category'name of the book"})
    @Column({
        type: DataType.STRING,
        unique: true,
    })
    title: string;

    @ApiProperty({example: "it is the orker history ", description: "Additional info about the history_type"})
    @Column({
        type: DataType.STRING,
    })
    description: string;

    @HasMany(() => History)
    histories: History[]
}
