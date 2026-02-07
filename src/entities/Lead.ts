import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Lead {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    source!: string;

    @Column()
    companyName!: string;

    @Column()
    contactName!: string;

    @Column({ default: "new" })
    stage!: string;

    @CreateDateColumn()
    createdAt!: Date;
}
