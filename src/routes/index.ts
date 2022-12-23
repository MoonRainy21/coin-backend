import compose from "koa-compose";

import adminRouter from './admin';
import staffRouter from './staff';
import userRouter from './user';

export const router = compose([
    userRouter.routes(),
    userRouter.allowedMethods(),
    staffRouter.routes(),
    staffRouter.allowedMethods(),
    adminRouter.routes(),
    adminRouter.allowedMethods()
])
