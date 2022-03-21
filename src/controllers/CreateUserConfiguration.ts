import { Request, Response } from "express";
import CreateUserConfigurationService from "../services/CreateUserConfigurationService";

export default class CreateUserConfigurationController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { theme, email_notifications } = request.body;

        const createUserConfigurationService = new CreateUserConfigurationService();

        const userConfiguration = await createUserConfigurationService.execute({
            id,
            theme,
            email_notifications
        });

        return response.status(201).json(userConfiguration);
    }
}