import { Next, ParameterizedContext } from "koa";
import { z } from "zod";
import { UserModel } from "../../models/connection";
import { State } from "../../util/types";

export const patchMoneyAsync = async (ctx: ParameterizedContext<State>, next: Next) => {
    const bodyparse = z.object({
        kyoId: z.string(),
        incresement: z.number()
    }).safeParse(ctx.request.body)
    ctx.assert(bodyparse.success, 400)

    const user = await UserModel.findOne({ kyoId: bodyparse.data.kyoId }).exec()
    ctx.assert(user, 404)

    await user.updateOne({
        money: user.money+bodyparse.data.incresement
    })
    ctx.response.status = 200
}