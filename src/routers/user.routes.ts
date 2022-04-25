import { Router } from "express";
import * as userController from "../controllers/user.controller";
import { validationSchema } from "../middlewares/schema.middleware";
import { joiRegisterObject } from "../schemas/auth.schema";

const userRouter = Router();

userRouter.post('/', [validationSchema(joiRegisterObject)], userController.create);

export { userRouter };