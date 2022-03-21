import { getRepository } from "typeorm";
import User from "../entities/user.entity";

export class ListUsersService {

    async execute(): Promise<User[]> {
        const repository = getRepository(User);

        const users = await repository.find({
            relations: ["userConfiguration"]
        });

        return users;
    }
}