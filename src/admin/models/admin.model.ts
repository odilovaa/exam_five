import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "../../role/models/role.entity";

interface AdminAttr{
    full_name: string;
    email: string;
    phone_number: string;
    phone_number2: string;
    hashed_password: string;
    birth_date: Date;
    hashed_refreshToken: string;
    is_active: boolean;
    roleId: string;
    photo: string;
    activation_link: string;
}

@Table({tableName: "admins"})
export class Admin extends Model<Admin, AdminAttr>{
    @ApiProperty({example: 1, description: "Unique ID"})
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ApiProperty({example: "John Doe", description: "Full name of admin"})
    @Column({
        type: DataType.STRING,
    })
    full_name: string;

    @ApiProperty({example: "johndoe@gmail.com", description: "Email address of admin"})
    @Column({
        type: DataType.STRING,
        unique: true,
    })
    email: string;

    @ApiProperty({example: "+99891234567", description: "Phone number of admin"})
    @Column({
        type: DataType.STRING,
        unique: true,
    })
    phone_number: string;

    @ApiProperty({example: "+99891234567", description: "Addirional phone number of admin"})
    @Column({
        type: DataType.STRING,
        unique: true,
    })
    phone_number2: string;

    @ApiProperty({example: "pas$#0rd", description: "Passeord of admin"})
    @Column({
        type: DataType.STRING,
        unique: true,
    })
    hashed_password: string;

    @ApiProperty({example: 1111-22-33, description: "Birth date of admin"})
    @Column({
        type: DataType.DATE,
    })
    birth_date: Date;

    @ApiProperty({example: "asdf5e6wt45tgb", description: "Refresh token of admin"})
    @Column({
        type: DataType.STRING,
    })
    hashed_refreshToken: string;

    @ApiProperty({example: true, description: "Activness or deactivness of admin"})
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
    })
    is_active: Boolean;

    @ApiProperty({example: "SUPERADMIN", description: "Role or status of admin"})
    @BelongsTo(() => Role)
    roleId: Role;

    @ApiProperty({example: "adai90jewofmc", description: "Photo of admin"})
    @Column({
        type: DataType.STRING,
    })
    photo: string;

    @ApiProperty({example: 'afjshcalsdtyieruwhf12', description: 'Link to make active the admin'})
    @Column({
        type: DataType.STRING,
    })
    activation_link: string;
}
