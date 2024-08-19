import { Router } from "express";
import { OpportunityControllers } from "../controllers/opportunity.controllers";
import { applicationRouter } from "./application.routes";
import { ValidadeBody } from "../middlewares/validadeBody.middleware";
import { opportunityCreateSchema, opportunityUpdateSchema } from "../schemas/opportunity.schemas";
import { IsOppportunityIdValid } from "../middlewares/isOpportunityIdValid.middleware";
import { container } from "tsyringe";
import { OpportunityServices } from "../services/opportunity.services";
import { ValidadeToken } from "../middlewares/validadeToken.middleware";
import { IsOpportunityOwner } from "../middlewares/isOpportunityOwner.middleware";



export const opportunityRouter = Router();
container.registerSingleton("OpportunityServices", OpportunityServices)
const opportunityControllers = container.resolve(OpportunityControllers);


opportunityRouter.post("/", ValidadeToken.execute, ValidadeBody.execute(opportunityCreateSchema), (req, res) => opportunityControllers.create(req, res));
opportunityRouter.get("/", (req, res) => opportunityControllers.findMany(req, res));
opportunityRouter.get("/user", ValidadeToken.execute,(req, res) => opportunityControllers.findMany(req, res));

opportunityRouter.use("/:id", IsOppportunityIdValid.execute) //checa automaticamente se o id é valido para todas as rotas abaixo

opportunityRouter.get("/:id", ValidadeToken.execute, IsOpportunityOwner.execute,(req, res) => opportunityControllers.findOne(req, res));
opportunityRouter.patch("/:id", ValidadeToken.execute, IsOpportunityOwner.execute, ValidadeBody.execute(opportunityUpdateSchema), (req, res) => opportunityControllers.update(req, res));
opportunityRouter.delete("/:id", ValidadeToken.execute, IsOpportunityOwner.execute, (req, res) => opportunityControllers.delete(req, res));

opportunityRouter.use("/", applicationRouter);
 