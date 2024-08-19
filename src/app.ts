import "reflect-metadata";
import "express-async-errors";
import express, { json } from "express";
import helmet from "helmet";
import cors from "cors";
import { opportunityRouter } from "./routers/opportunity.routes";
import { HandleErrors } from "./middlewares/handleErrors.middleware";
import { userRouter } from "./routers/user.routes";

export const app = express();

app.use(helmet());
app.use(cors());
app.use(json());
app.use("/opportunities", opportunityRouter);
app.use("/users", userRouter);
app.use(HandleErrors.execute);