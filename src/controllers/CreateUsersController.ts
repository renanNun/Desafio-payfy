import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

export default class CreateUsersController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, age } = request.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            name,
            email,
            age
        });

        return response.status(201).json(user);
    }

}