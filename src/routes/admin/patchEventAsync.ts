import { Next, ParameterizedContext } from "koa";
import { z } from "zod";
import { BoothEventModel } from "../../models/connection";
import { State } from "../../util/types";

export const patchEventAsync = async (ctx: ParameterizedContext<State>, next: Next) => {
    const bodyparse = z.object({
        id: z.string(),
        isApproved: z.boolean()
    }).safeParse(ctx.request.body)
    ctx.assert(bodyparse.success, 400)

    const boothEvent = await BoothEventModel.findOne({ id: bodyparse.data.id }).exec()
    ctx.assert(boothEvent, 404)

    await boothEvent.updateOne({
        isApproved: bodyparse.data.isApproved
    })
    ctx.response.status = 200
}