import { Router } from "express";
import { ApplicationControllers } from "../controllers/application.controllers";
import { applicationCreateSchema } from "../schemas/application.schemas";
import { ValidadeBody } from "../middlewares/validadeBody.middleware";
import { container } from "tsyringe";
import { ApplicationServices } from "../services/application.services";
import { ValidadeToken } from "../middlewares/validadeToken.middleware";
import { IsOpportunityOwner } from "../middlewares/isOpportunityOwner.middleware";

export const applicationRouter = Router();
container.registerSingleton("ApplicationServices", ApplicationServices)
const aplicationControllers = container.resolve(ApplicationControllers);

applicationRouter.post("/:id/applications", ValidadeBody.execute(applicationCreateSchema), (req, res) => aplicationControllers.create(req, res));
applicationRouter.get("/:id/applications", ValidadeToken.execute, IsOpportunityOwner.execute ,(req, res) => aplicationControllers.findMany(req, res));