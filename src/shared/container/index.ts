import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";

// criando unica instancia da classe

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
