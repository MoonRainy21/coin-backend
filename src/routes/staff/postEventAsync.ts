import { Next, ParameterizedContext } from "koa";
import { z } from "zod";
import { BoothEventModel, UserModel } from "../../models/connection";
import { BOOTHEVENTS } from "../../secret/boothEvents";
import { State } from "../../util/types";
import { hash } from "../../util/hash"

export const postEventAsync = async (ctx: ParameterizedContext<State>, next: Next) => {
    const bodyparse = z.object({
        kyoId: z.string(),
        eventName: z.string()
    }).safeParse(ctx.request.body)
    ctx.assert(bodyparse.success, 400)

    const boothEvent = BOOTHEVENTS.find((boothEvent) => {
        return boothEvent.eventName === bodyparse.data.eventName
    })
    ctx.assert(boothEvent, 404)

    const user = await UserModel.findOne({ kyoId: bodyparse.data.kyoId })
    ctx.assert(user, 404)

    const model = new BoothEventModel({
        ...boothEvent,
        kyoId: bodyparse.data.kyoId,
        time: new Date(),
        id: hash(bodyparse.data.kyoId+bodyparse.data.eventName+(new Date()).toISOString())
    })
    await model.save()

    ctx.status = 201
    await next()
}