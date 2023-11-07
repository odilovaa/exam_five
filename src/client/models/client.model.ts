import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Order } from "../../order/models/order.model";
import { ClientType } from "../../client_type/models/client_type.model";


interface ClientAttr {
    name: string;
    full_name: string;
    email: string;
    phone_number: string;
    location: string;
    client_type_id: number;
}

@Table({tableName: "clients"})
export class Client extends Model<Client, ClientAttr>{
    @ApiProperty({example: 1, description: "Unique ID"})
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ApiProperty({example: "Company", description: "Company or coorparetion name"})
    @Column({
        type: DataType.STRING,
        unique: true
    })
    name: string;

    @ApiProperty({example: "John Doe",  description: "Client's full name"})
    @Column({
        type: DataType.STRING,
    })
    full_name: string;

    @ApiProperty({example: "johndoe@gmail.com", description: "Client's email address"})
    @Column({
        type: DataType.STRING,
    })
    email: string;

    @ApiProperty({example: "+99891234567",  description: "Client's phone number"})
    @Column({
        type: DataType.STRING,
    })
    phone_number: string;

    @ApiProperty({example: ";laiwifhjvn", description: "location of the company"})
    @Column({
        type: DataType.STRING,
    })
    location: string;

    @ApiProperty({example: "3", description: "Id of Client type"})
    @ForeignKey(() => ClientType)
    @Column({
        type: DataType.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    client_type_id: number;

    @BelongsTo(() => ClientType)
    client_type: ClientType;
    
    @HasMany(() => Order)
    orders: Order[]


}
