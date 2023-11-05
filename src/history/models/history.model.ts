import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, Model, Table } from "sequelize-typescript";
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

Table({tableName: "histoies"})
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
    @BelongsTo(() => HistoryType)
    history_type_id: HistoryType;

    @ApiProperty({example: "3", description: "Id of the action"})
    @BelongsTo(() => BoughtProduct)
    action_bought_id: BoughtProduct;

    @ApiProperty({example: "2", description: "Id of the action"})
    @BelongsTo(() => Order)
    action_order_id: Order;

    @ApiProperty({example: "ti is additional info", description: "Info about history"})
    @Column({
        type: DataType.STRING
    })
    additional_info: string;
}
