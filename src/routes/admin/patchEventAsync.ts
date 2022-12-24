import { Next, ParameterizedContext } from "koa";
import { z } from "zod";
import { BoothEventModel, UserModel } from "../../models/connection";
import { WriteMoneyLog } from "../../util/logger";
import { State } from "../../util/types";

export const patchEventAsync = async (ctx: ParameterizedContext<State>, next: Next) => {
    const bodyparse = z.object({
        id: z.string(),
        isApproved: z.boolean() // should always be true
    }).safeParse(ctx.request.body)
    ctx.assert(bodyparse.success, 400)

    const boothEvent = await BoothEventModel.findOne({ id: bodyparse.data.id }).exec()
    ctx.assert(boothEvent, 404)
    if (boothEvent.isApproved) {
        ctx.throw(409)
    }
    await boothEvent.updateOne({
        isApproved: bodyparse.data.isApproved
    })

    const sId = boothEvent.kyoId
    const user = await UserModel.findOne({kyoId: sId}).exec()
    ctx.assert(user, 404)

    WriteMoneyLog(boothEvent)

    await user.updateOne({
        money: user.money+boothEvent.value,
        totalMoney: user.totalMoney+(boothEvent.value > 0 ? boothEvent.value : 0),
        lastEvents: user.lastEvents.concat([boothEvent])
    })
    ctx.response.status = 200
}