import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { WorkerType } from "../../worker_type/models/worker_type.model";

interface WorkerAttr{
    full_name: string;
    worker_type_id: number;
    email: string;
    phone_number: string;
    phone_number2: string;
    address: string;
    hashed_password: string;
    hashed_refreshToken: string;
    start_time: string;
    finish_time: string;
    start_date: Date;
    finish_date: Date;
    salary: string;
    responsbility: string;
}

@Table({tableName: "workers"})
export class Worker extends Model<Worker, WorkerAttr> {
    @ApiProperty({example: 1, description: "Unique ID"})
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ApiProperty({example: "Worker worker", description: "Full name of the worker"})
    @Column({
        type: DataType.STRING,
    })
    full_name: string;

    @ApiProperty({example: "1", description: "Id of the typr of the worker"})
    @ForeignKey(() => WorkerType)
    @Column({
        type: DataType.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    worker_type_id: number;

    @BelongsTo(() => WorkerType)
    worker_type: WorkerType;

    @ApiProperty({example: "worker@gmail.com", description: "Email address of the worker"})
    @Column({
        type: DataType.STRING,
    })
    email: string;

    @ApiProperty({example: "992134567", description: "Phone number of the worker"})
    @Column({
        type: DataType.STRING,
    })
    phone_number: string;

    @ApiProperty({example: "083028471243", description: "Additional Phone number of the worker"})
    @Column({
        type: DataType.STRING,
    })
    phone_number2: string;

    @ApiProperty({example: "Chilonzor 20 1 1", description: "Address of the worker"})
    @Column({
        type: DataType.STRING,
    })
    address: string;

    @ApiProperty({example: "dsor09tf", description: "Password of the worker"})
    @Column({
        type: DataType.STRING,
    })
    hashed_password: string;

    @Column({
        type: DataType.STRING,
    })
    hashed_refreshToken: string;

    @ApiProperty({example: "08:00", description: "start time of the work"})
    @Column({
        type: DataType.STRING,
    })
    start_time: string;

    @ApiProperty({example: "19:00", description: "finish time of the work"})
    @Column({
        type: DataType.STRING,
    })
    finish_time: string;

    @ApiProperty({example: "12-12-2023", description: "Start date of the contract"})
    @Column({
        type: DataType.DATE,
    })
    start_date: Date;

    @ApiProperty({example: "15-12-2024", description: "the end date of the contract"})
    @Column({
        type: DataType.DATE,
    })
    finish_date: Date;

    @ApiProperty({example: "10000", description: "salary of the worker"})
    @Column({
        type: DataType.STRING,
    })
    salary: string;

    @ApiProperty({example: "all responsbilities of the worker", description: "all responsbilities of the worker"})
    @Column({
        type: DataType.STRING,
    })
    responsbility: string;
}
