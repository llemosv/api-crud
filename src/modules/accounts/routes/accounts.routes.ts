import { Router } from "express";
import { CreateUserController } from "../useCases/createUser/CreateUserController";

const accountsRoutes = Router();
const createUserController = new CreateUserController();

accountsRoutes.post("/createUser", createUserController.handle);

export { accountsRoutes };
