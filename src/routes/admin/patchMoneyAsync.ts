import { Next, ParameterizedContext } from "koa";
import { z } from "zod";
import { UserModel } from "../../models/connection";
import { WriteMoneyLog } from "../../util/logger";
import { BoothEvent, State } from "../../util/types";

export const patchMoneyAsync = async (ctx: ParameterizedContext<State>, next: Next) => {
    const bodyparse = z.object({
        kyoId: z.string(),
        incresement: z.number()
    }).safeParse(ctx.request.body)
    ctx.assert(bodyparse.success, 400)

    const user = await UserModel.findOne({ kyoId: bodyparse.data.kyoId }).exec()
    ctx.assert(user, 404)

    WriteMoneyLog({
        kyoId: bodyparse.data.kyoId,
        boothName: "ATM",
        eventName: "ATM",
        time: new Date(),
        value: bodyparse.data.incresement,
        id: ""
    })

    await user.updateOne({
        money: user.money+bodyparse.data.incresement,
        totalMoney: user.totalMoney+(bodyparse.data.incresement > 0 ? bodyparse.data.incresement : 0),

    })
    ctx.response.status = 200
}