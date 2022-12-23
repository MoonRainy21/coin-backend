import { Next, ParameterizedContext } from "koa";
import { USERS } from "../../secret/users";
import { hash } from "../../util/hash";
import { State } from "../../util/types";
import { getUserAsync } from "./getUserAsync";

export const postLoginAsync = async (ctx: ParameterizedContext<State>, next: Next) => {
    ctx.assert(hash(ctx.request.headers["x-api-key"] as string) in USERS, 401)
    
    ctx.status = 200
    await getUserAsync(ctx, next)
    await next()
}