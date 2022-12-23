import { ADMINS } from '../secret/admins';
import { STAFFS } from '../secret/staffs';
import { USERS } from '../secret/users';
import { hash } from './hash';
import { MethodFunction } from './types';

export const withAuth= (methodFunc: MethodFunction) : MethodFunction=> {
    return async (ctx, next) => {
      // login dones't require x-api-key
      if (ctx.request.path.startsWith("/user/login")) {
        await methodFunc(ctx, next);
      }

      // user authentication
      if (
        hash(ctx.request.headers["x-api-key"] as string) in
        USERS
      ) {
        if (ctx.request.path.startsWith("/user")) {
            await methodFunc(ctx, next);
        }
        else {
            ctx.response.status = 401
            next();
            return;
        }
      }
  
      // staff authentication
      else if (
        hash(ctx.request.headers["x-api-key"] as string) in
        STAFFS
      ) {
        if (ctx.request.path.startsWith("/staff")) {
          await methodFunc(ctx, next);
        } else {
          ctx.response.status = 401;
          next();
          return;
        }
      }

      // staff authentication
      else if (
        hash(ctx.request.headers["x-api-key"] as string) in
        ADMINS
      ) {
        if (ctx.request.path.startsWith("/admin")) {
          await methodFunc(ctx, next);
        } else {
          ctx.response.status = 401;
          next();
          return;
        }
      }
      
      // no authentication
      else {
        ctx.response.status = 403;
        next();
        return;
      }
    };
  };