import { Next, ParameterizedContext } from "koa";
import { USERS } from "../../secret/users";
import { hash } from "../../util/hash";
import { State } from "../../util/types";
import { getUserAsync } from "./getUserAsync";

export const postLoginAsync = async (ctx: ParameterizedContext<State>, next: Next) => {
    console.log(ctx.request.headers["x-api-key"] as string)
    ctx.assert(USERS.includes(hash(ctx.request.headers["x-api-key"] as string)), 401)
    ctx.status = 200
    await getUserAsync(ctx, next)
}