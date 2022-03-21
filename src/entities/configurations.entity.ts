import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import User from "./user.entity";

export enum UserThemes{
    LIGHT = "light",
    DARK = "dark",
    MEDIUM = "medium"
}

@Entity("users_configurations")
export class UserConfiguration {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        type: "enum",
        enum: UserThemes,
    })
    theme: UserThemes;

    @Column()
    email_notifications: boolean;

    @OneToOne(() => User, user => user.userConfiguration)
    user: User;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}