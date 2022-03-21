import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUsers = container.resolve(ListUsersUseCase);

    const list = await listUsers.execute();

    return response.json(list);
  }
}

export { ListUsersController };
