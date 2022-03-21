import { Router } from "express";
import { accountsRoutes } from "../modules/accounts/routes/accounts.routes";
import { authenticateRoutes } from "../modules/accounts/routes/authenticate.routes";

const router = Router();

router.use("/accounts", accountsRoutes);
router.use(authenticateRoutes);

export { router };
