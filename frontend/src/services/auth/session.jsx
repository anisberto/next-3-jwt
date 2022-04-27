import { authService } from "./authService";
import { useRouter } from "next/router";
import React from "react";

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

export function useSession() {
  const [session, setSession] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    authService.getSession()
      .then((response) => {
        setSession(response)
      })
      .catch((error) => {
        setSession('Your Session was Broken')
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      });
  }, []);

  return {
    data: {
      session
    },
    error,
    loading,
  }
}

export function withSessionHOC(Component) {
  return function Wrapper(props) {
    const router = useRouter();
    const session = useSession();

    if (!session.loading && session.error) {
      router.push(
        '/?unauthorized=401'
      )
    }
    const modifiedProps = {
      ...props,
      session: session.data.session,
    }
    return (
      <Component {...modifiedProps} />
    )
  }
}
