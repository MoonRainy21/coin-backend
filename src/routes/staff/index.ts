import Router from "@koa/router";
import { State } from "../../util/types";
import { postEventAsync } from "./postEventAsync";

const router = new Router<State>()

router.post('/staff/event', postEventAsync)

export default router