import Router from "@koa/router";
import { State } from "../../util/types";
import { postEventAsync } from "./postEventAsync";

const router = new Router<State>()

router.post('/event', postEventAsync)

export default router