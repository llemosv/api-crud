import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdatePasswordUseCase } from "./UpdatePasswordUseCase";

class UpdatePasswordController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id: string = request.query.id as string;
    const { password, cpf } = request.body;

    const updatePasswordUseCase = container.resolve(UpdatePasswordUseCase);

    await updatePasswordUseCase.execute({
      id,
      cpf,
      password,
    });

    return response.status(200).send();
  }
}

export { UpdatePasswordController };
