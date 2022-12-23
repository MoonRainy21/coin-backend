import { Next, ParameterizedContext } from "koa";
import { z } from "zod";
import { equals } from 'typescript-is';
import { BoothEventModel } from "../../models/connection";
import { State } from "../../util/types";

interface Query {
    reviewed : boolean
}

export const getEventAsync = async (ctx: ParameterizedContext<State>, next: Next) => {
    if (JSON.stringify(ctx.request.query) === JSON.stringify({})) {
        const documents = await BoothEventModel.find({}).lean().exec()
        ctx.response.status = 200
        ctx.body = documents
    }
    else if (equals<Query>(ctx.request.query)) {
        const documents = await BoothEventModel.find({ isApproved : (ctx.reqest.query.reviewed ? true : undefined) }).lean().exec()
        ctx.response.status = 200
        ctx.body = documents
    }
    else {
        ctx.throw(400)
    }
}