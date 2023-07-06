import userRoutes from "../../trash/user/routes";
import taskRoutes from "../../trash/task/routes";
import collectioRoutes from "../../trash/collection/routes";
import express from "express";
import cors from "cors";

import * as trpcExpress from '@trpc/server/adapters/express'
import { taskRouter } from "../modules/task/router";
import { createContext } from "../trpc";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";


const routes = (app: any) => {
  app
    .use(cors())
    .use(express.json())
    .use("/api/trpc/task", trpcExpress.createExpressMiddleware({ router: taskRouter, createContext }))
    .use("/user", userRoutes)
    .use(ensureAuthenticated)
    .use("/task", taskRoutes)
    .use("/collection", collectioRoutes)
};

export default routes;
