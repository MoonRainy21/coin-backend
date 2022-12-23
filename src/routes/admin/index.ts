import Router from "@koa/router";
import { State } from "../../util/types";
import { getEventAsync } from "./getEventAsync";
import { getUsersAsync } from "./getUsersAsync";
import { patchEventAsync } from "./patchEventAsync";
import { patchMoneyAsync } from "./patchMoneyAsync";

const router = new Router<State>()

router.get('/event', getEventAsync)
router.get('/users', getUsersAsync)
router.patch('/event', patchEventAsync)
router.patch('/money', patchMoneyAsync)

export default router