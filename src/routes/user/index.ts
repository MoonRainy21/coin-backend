import Router from "@koa/router";
import { State } from "../../util/types";
import { getUserAsync } from "./getUserAsync";
import { postLoginAsync } from "./postLoginAsync";

const router = new Router<State>()

router.get('/', getUserAsync)
router.post('/login', postLoginAsync)

export default router