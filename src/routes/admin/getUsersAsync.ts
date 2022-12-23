import { Next, ParameterizedContext } from "koa";
import { equals } from "typescript-is";
import { UserModel } from "../../models/connection";
import { State } from "../../util/types";

export const getUsersAsync = async (ctx: ParameterizedContext<State>, next: Next) => {
    console.log(ctx.request.url)
    if (JSON.stringify(ctx.request.query) === JSON.stringify({})) {
        const document = await UserModel.find({}).lean().exec()
        ctx.response.status = 200
        ctx.body = document
    }
    else if (typeof(ctx.request.query.kyoId) === "string") {
        const document = await UserModel.findOne({ kyoId: ctx.request.query.kyoId }).lean().exec()
        ctx.assert(document, 404)
        ctx.response.status = 200
        ctx.body = document
    }
    else {
        ctx.throw(400)
    }
}