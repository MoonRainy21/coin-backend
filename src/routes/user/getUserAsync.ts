import { Next, ParameterizedContext } from "koa";
import { UserModel } from "../../models/connection";
import { State } from "../../util/types";

export const getUserAsync = async (ctx: ParameterizedContext<State>, next: Next) => {
    ctx.status = 200
    const found = await UserModel.findOne({ kyoId: ctx.state.kyoId })
    ctx.assert(found, 404)
    
    ctx.status=200
    ctx.body = found

    await next()
}