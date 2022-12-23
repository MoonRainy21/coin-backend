import { Next, ParameterizedContext } from "koa";
import { z } from "zod";
import { equals } from 'typescript-is';
import { BoothEventModel } from "../../models/connection";
import { State } from "../../util/types";

interface Query {
    isApproved : string
}

export const getEventAsync = async (ctx: ParameterizedContext<State>, next: Next) => {
    if (JSON.stringify(ctx.request.query) === JSON.stringify({})) {
        const documents = await BoothEventModel.find({}).lean().exec()
        ctx.response.status = 200
        ctx.body = documents
    }
    else if (ctx.request.query.isApproved === 'false' || ctx.request.query.isApproved === 'true') {
        const documents = await BoothEventModel.find({ isApproved : false }).lean().exec()
        ctx.response.status = 200
        ctx.body = documents
    }
    else {
        ctx.throw(400)
    }
}