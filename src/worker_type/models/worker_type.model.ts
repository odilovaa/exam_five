import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Worker } from "../../worker/models/worker.model";


interface WorkerTypeAttr{
    title: string;
}

@Table({tableName: "Worker_typies"})
export class WorkerType extends Model<WorkerType, WorkerTypeAttr>{
    @ApiProperty({example: '1', description: "Role's id"})
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({example: "Traslater", description: "Type'name of the worker"})
    @Column({
        type: DataType.STRING,
        unique: true,
    })
    title: string;

    @HasMany(() => Worker)
    workers: Worker[]
}
