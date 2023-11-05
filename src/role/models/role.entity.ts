import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Admin } from "../../admin/models/admin.model";
import { ApiProperty } from "@nestjs/swagger";

interface RoleAttr {
    name: string;
    description: string;
}

Table({tableName: "roles"})
export class Role extends Model<RoleAttr>{
    @ApiProperty({example: '1', description: "Role's id"})
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({example: 'ADMIN', description: "Admin's role"})
    @Column({
        type: DataType.STRING,
        unique: true,
    })
    name: string;

    @ApiProperty({example: 'ADMIN', description: "Role's description"})
    @Column({
        type: DataType.STRING,
    })
    description: string;

    @ApiProperty({example: ['Users'], description: "Role's users"})
    @HasMany(() => Admin)
    admins: Admin[]
}
