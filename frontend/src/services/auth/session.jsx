import { authService } from "./authService";

export function withSession(funcao) {
  return async (ctx) => {
    try {
      const session = await authService.getSession(ctx);
      const modifiedCtx = {
        ...ctx,
        req: {
          ...ctx.req,
          session: {
            user_authenticated: session.user,
            user_id: session.id,
            user_roles: session.roles
          },
        }
      };

      return funcao(modifiedCtx);
    } catch (error) {
      return {
        redirect: {
          permanent: false,
          destination: '/?error=unauthorized&status=401'
        }
      }
    }
  }
}
