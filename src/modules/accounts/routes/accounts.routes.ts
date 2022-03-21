import { Router } from "express";
import { ensureAutheticated } from "../../../middlewares/ensureAuthenticated";
import { CreateUserController } from "../useCases/createUser/CreateUserController";
import { DeleteUserController } from "../useCases/deleteUser/DeleteUserController";
import { ListUsersController } from "../useCases/listUsers/ListUsersController";
import { UpdatePasswordController } from "../useCases/updatePassword/UpdatePasswordController";
import { UpdateUserController } from "../useCases/updateUser/UpdateUserController";

const accountsRoutes = Router();
const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const updateUserController = new UpdateUserController();
const updatePasswordController = new UpdatePasswordController();
const deleteUserController = new DeleteUserController();

accountsRoutes.post("/createUser", createUserController.handle);
accountsRoutes.get(
  "/listUsers",
  ensureAutheticated,
  listUsersController.handle
);
accountsRoutes.put(
  "/updateUser",
  ensureAutheticated,
  updateUserController.handle
);
accountsRoutes.put(
  "/updatePassword",
  ensureAutheticated,
  updatePasswordController.handle
);
accountsRoutes.delete(
  "/deleteUser",
  ensureAutheticated,
  deleteUserController.handle
);

export { accountsRoutes };
