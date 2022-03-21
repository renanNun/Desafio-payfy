import { getRepository } from "typeorm";
import { UserConfiguration, UserThemes } from "../entities/configurations.entity";
import User from "../entities/user.entity";
import AppError from "../errors/AppError";

interface ICreateUserConfigurationService {
    id: string;
    theme: UserThemes;
    email_notifications: boolean;
}

export default class CreateUserConfigurationService {

    async execute({id, theme, email_notifications}: ICreateUserConfigurationService): Promise<UserConfiguration> {

        const userConfigurationRepository = getRepository(UserConfiguration);
        const userRepository = getRepository(User);

        const userExists = await userRepository.findOne({
            where: {
                id: id
            }
        });

        if (!userExists) {
            throw new AppError('User not found.');
        }

        const userAlreadyHasConfiguration = await userConfigurationRepository.findOne({
            where: {
                user: userExists
            }
        });

        if (userAlreadyHasConfiguration) {
            throw new AppError('User already has a configuration.');
        }

        const userConfiguration = userConfigurationRepository.create({
            user: userExists,
            theme: theme,
            email_notifications: email_notifications
        });

        await userConfigurationRepository.save(userConfiguration);
        
        return userConfiguration;
    }

}