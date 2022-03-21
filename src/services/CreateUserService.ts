import { getRepository } from "typeorm";
import User from "../entities/user.entity";
import AppError from "../errors/AppError";

interface ICreateUserService {
    name: string;
    email: string;
    age: number;
}

export class CreateUserService {

    async execute({name, email, age}: ICreateUserService): Promise<User> {
        const repository = getRepository(User);

        const userAlreadyExists = await repository.findOne({
            where: {
                email: email
            }
        });

        if (userAlreadyExists) {
            throw new AppError('User already exists');
        }

        if(age < 0) {
            throw new AppError('Age must be greater than 18');
        }

        if(age > 120) {
            throw new AppError('Age must be less than 120');
        }

        if(age < 18) {
            throw new AppError('Age must be greater than 18');
        }

        if(!name || !email || !age) {
            throw new AppError('Missing required fields');
        }

        const user = repository.create({
            name,
            email,
            age
        });

        await repository.save(user);

        return user;
    }

}