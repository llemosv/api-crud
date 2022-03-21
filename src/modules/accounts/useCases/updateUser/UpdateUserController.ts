import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id: string = request.query.id as string;
    const { name, email, cpf, country } = request.body;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    const result = await updateUserUseCase.execute({
      id,
      name,
      email,
      cpf,
      country,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).json(result);
  }
}

export { UpdateUserController };
