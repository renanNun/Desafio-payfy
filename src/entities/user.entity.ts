import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserConfiguration } from "./configurations.entity";

@Entity("users")
export default class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    age: number;

    @OneToOne(() => UserConfiguration)
    @JoinColumn({name: "user_configuration_id"})
    userConfiguration: UserConfiguration;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}