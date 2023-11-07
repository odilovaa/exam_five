import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { HistoryType } from "../../history_type/models/history_type.model";
import { BoughtProduct } from "../../bought_product/models/bought_product.model";
import { Order } from "../../order/models/order.model";

interface HistoryAttr{
    name: string;
    history_type_id: number;
    action_bought_id: number;
    action_order_id: number;
    additional_info: string;
}

@Table({tableName: "histoies"})
export class History extends Model<History, HistoryAttr>{
    @ApiProperty({example: 1, description: "Unique ID"})
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ApiProperty({example: "History 3", description: "name for History"})
    @Column({
        type: DataType.STRING
    })
    name: string;

    @ApiProperty({example: "2", description: "Id of the type of the history"})
    @ForeignKey(() => HistoryType)
    @Column({
        type: DataType.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    history_type_id: number;

    @BelongsTo(() => HistoryType)
    history_type: HistoryType;

    @ApiProperty({example: "3", description: "Id of the action"})
    @ForeignKey(() => BoughtProduct)
    @Column({
        type: DataType.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    action_bought_id: number;

    @BelongsTo(() => BoughtProduct)
    action_bought: BoughtProduct;

    @ApiProperty({example: "2", description: "Id of the action"})
    @ForeignKey(() => Order)
    @Column({
        type: DataType.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    action_order_id: number;

    @BelongsTo(() => Order)
    action_order: Order;

    @ApiProperty({example: "ti is additional info", description: "Info about history"})
    @Column({
        type: DataType.STRING
    })
    additional_info: string;
}
