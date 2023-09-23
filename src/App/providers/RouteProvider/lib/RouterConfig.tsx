import { HomePage } from "Pages/HomePage";
import { NotFoundPage } from "Pages/NotFoundPage";
import { ProfilePage } from "Pages/ProfilePage";
import { RegisterPage } from "Pages/RegisterPage";
import { AppRoutes, AppRoutesWithAuthProps, routes } from "Shared/lib/routes/routesConfig";

export const routeConfig: Record<AppRoutes, AppRoutesWithAuthProps> = {
  [AppRoutes.MAIN]: {
    path: routes.main,
    element: <HomePage />,
    authOnly: true
  },
  [AppRoutes.PROFILE]: {
    path: routes.profile,
    element: <ProfilePage />,
    authOnly: true
  },
  [AppRoutes.REGISTER]: {
    path: routes.register,
    element: <RegisterPage />
  },
  // 404
  [AppRoutes.NOT_FOUND]: {
    path: routes.not_found,
    element: <NotFoundPage />
  }
}