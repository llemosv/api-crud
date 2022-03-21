import { inject, injectable } from "tsyringe";

import { hash } from "bcryptjs";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  id: string;
  cpf: string;
  password: string;
}

@injectable()
class UpdatePasswordUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ id, password, cpf }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError("User does not exists.");
    }

    if (user.cpf !== cpf) {
      throw new AppError("Incorrect and/or non-existent CPF");
    }

    const passwordHash = await hash(password, 8);

    user.password = passwordHash;

    await this.usersRepository.save(user);
  }
}

export { UpdatePasswordUseCase };
