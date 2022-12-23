import Router from "@koa/router";
import compose from "koa-compose";

import userRouter from './user'
import staffRouter from './staff'
import adminRouter from './admin'

export const router = compose([
    userRouter.routes(),
    userRouter.allowedMethods(),
    staffRouter.routes(),
    staffRouter.allowedMethods(),
    adminRouter.routes(),
    adminRouter.allowedMethods()
])
