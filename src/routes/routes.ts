import { Router } from "express";
import { accountsRoutes } from "../modules/accounts/routes/accounts.routes";

const router = Router();

router.use("/accounts", accountsRoutes);

export { router };
