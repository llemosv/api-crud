import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";
import { User } from "../../entities/User";

interface IRequest {
  id: string;
  name: string;
  email: string;
  cpf: string;
  country: string;
}

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ id, name, email, cpf, country }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError("User does not exists.");
    }

    user.name = name;
    user.email = email;
    user.country = country;
    user.cpf = cpf;

    await this.usersRepository.save(user);

    return user;
  }
}

export { UpdateUserUseCase };
