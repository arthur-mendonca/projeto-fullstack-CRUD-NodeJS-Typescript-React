import { Router } from "express";
import { createTokenController } from "../controllers/login.controllers";

const loginRouter = Router();

loginRouter.post("", createTokenController);

export { loginRouter };
