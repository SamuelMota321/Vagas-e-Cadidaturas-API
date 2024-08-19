import { Router } from "express";
import { container } from "tsyringe";
import { UserServices } from "../services/user.services";
import { UserControllers } from "../controllers/user.controllers";
import { ValidadeBody } from "../middlewares/validadeBody.middleware";
import { UserLoginBodySchema, UserRegisterBodySchema } from "../schemas/user.schema";
import { ValidadeToken } from "../middlewares/validadeToken.middleware";
import { IsUserEmailValid } from "../middlewares/isUserEmailValid.middleware";


export const userRouter = Router();
container.registerSingleton("UserServices", UserServices);
const userControllers = container.resolve(UserControllers);


userRouter.post("/register", ValidadeBody.execute(UserRegisterBodySchema), IsUserEmailValid.execute, (req, res) => userControllers.register(req, res));
userRouter.post("/login", ValidadeBody.execute(UserLoginBodySchema), (req, res) => userControllers.login(req, res));
userRouter.get("/", (req, res) => userControllers.getUser(req, res));