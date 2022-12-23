import Router from "@koa/router";
import { State } from "../../util/types";
import { getEventAsync } from "./getEventAsync";
import { getUsersAsync } from "./getUsersAsync";
import { patchEventAsync } from "./patchEventAsync";
import { patchMoneyAsync } from "./patchMoneyAsync";

const router = new Router<State>()

router.get('/admin/event', getEventAsync)
router.get('/admin/users', getUsersAsync)
router.patch('/admin/event', patchEventAsync)
router.patch('/admin/money', patchMoneyAsync)

export default router