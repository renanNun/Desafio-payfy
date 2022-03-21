import { Request, Response } from "express";
import ShowUserService from "../services/ShowUserService";

export default class ShowUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showUserService = new ShowUserService();

    const user = await showUserService.execute(id);

    return response.status(200).json(user);
  }
}
