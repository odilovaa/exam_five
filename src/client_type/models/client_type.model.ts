import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model } from "sequelize-typescript";
import { Client } from "../../client/models/client.model";

interface ClientTypeAttr{
    title: string;
    description: string;
}

export class ClientType extends Model<ClientType, ClientTypeAttr>{
    @ApiProperty({example: '1', description: "Role's id"})
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({example: "Company", description: "Type'name of the client"})
    @Column({
        type: DataType.STRING,
        unique: true,
    })
    title: string;

    @ApiProperty({example: "it is company ", description: "Additional info about the type"})
    @Column({
        type: DataType.STRING,
    })
    description: string;

    @HasMany(() => Client)
    clients: Client[]
}
