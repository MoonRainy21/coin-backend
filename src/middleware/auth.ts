import { Middleware } from 'koa';
import { ADMINS } from '../secret/admins';
import { STAFFS } from '../secret/staffs';
import { USERS } from '../secret/users';
import { hash } from '../util/hash';
import { parseKyoId } from '../util/helper';
import { State } from '../util/types';

export const authRequired = (): Middleware<State> => {
  return async (ctx, next) => {
    console.log(ctx.request.path)
    // login dones't require x-api-key
    if (ctx.request.path.startsWith("/user/login")) {
      ctx.state.kyoId = parseKyoId(ctx.request.headers["x-api-key"] as string)
      await next();
    }

    // user authentication
    else if (
      USERS.includes(hash(ctx.request.headers["x-api-key"] as string))
    ) {
      if (ctx.request.path.startsWith("/user")) {
        ctx.state.kyoId = parseKyoId(ctx.request.headers["x-api-key"] as string)
        await next();
      }
      else {
        ctx.throw(401);
      }
    }

    // staff authentication
    else if (
      STAFFS.includes( hash(ctx.request.headers["x-api-key"] as string))
    ) {
      if (ctx.request.path.startsWith("/staff")) {
        await next();
      } else {
        ctx.throw(401)
      }
    }

    // admin authentication
    else if (
      ADMINS.includes(hash(ctx.request.headers["x-api-key"] as string))
    ) {
      if (ctx.request.path.startsWith("/admin")) {
        await next();
      } else {
        ctx.throw(401);
      }
    }

    // no authentication
    else {
      ctx.throw(403);
    }
  };
};