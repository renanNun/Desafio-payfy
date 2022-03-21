import { getRepository } from "typeorm";
import User from "../entities/user.entity";
import AppError from "../errors/AppError";

export default class ShowUserService {

    async execute(id: string): Promise<User> {
        const userRepository = getRepository(User);

        const user = await userRepository.findOne({
            where: {
                id: id
            },
            relations: ["userConfiguration"]
        });

        if (!user) {
            throw new AppError('User not found.', 404);
        }

        return user;
    }
}