import { Router } from "express";
import * as authController from "../controllers/auth.controller";
import { validationSchema } from "../middlewares/schema.middleware";
import { joiLoginObject } from "../schemas/auth.schema";
const authRouter = Router();

authRouter.post('/', [validationSchema(joiLoginObject)], authController.signIn);

export { authRouter };