import { RouteProps } from "react-router-dom"


export type AppRoutesWithAuthProps = RouteProps & {
  authOnly?: boolean,
  notAuthOnly?: boolean
}

export enum AppRoutes {
  MAIN = 'main',
  PROFILE = 'profile',
  REGISTER = 'register',

  // 404
  NOT_FOUND = 'not_found',
}

export const routes: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.REGISTER]: '/register',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.NOT_FOUND]: '*'
}