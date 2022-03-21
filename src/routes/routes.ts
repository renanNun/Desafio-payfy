import { Router } from "express";
import CreateUserConfigurationController from "../controllers/CreateUserConfiguration";
import CreateUsersController from "../controllers/CreateUsersController";
import ListUsersController from "../controllers/ListUsersController";
import ShowUserController from "../controllers/ShowUserController";

const routes = Router();

routes.post('/users', new CreateUsersController().handle);
routes.get('/users', new ListUsersController().handle);
routes.get('/users/:id', new ShowUserController().handle);
routes.post('/users_configuration/:id', new CreateUserConfigurationController().handle);

routes.get('/', (request, response) => {
    return response.json({ message: 'Hello World' });
});

export default routes;