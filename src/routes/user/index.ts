import Router from "@koa/router";
import { Next, ParameterizedContext } from "koa";
import { USERS } from "../../secret/users";
import { hash } from "../../util/hash";
import { State } from "../../util/types";
import { getUserAsync } from "./getUserAsync";
import { postLoginAsync } from "./postLoginAsync";

const router = new Router<State>()

router.get('/user', getUserAsync)
router.post('/user/login', postLoginAsync)

export default router