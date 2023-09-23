import { useAuth } from 'Shared/hooks/useAuth/useAuth'
import { routes } from 'Shared/lib/routes/routesConfig'
import { Navigate, useLocation } from 'react-router'

interface IRequireAuthProps {
  children: JSX.Element
}

export const RequireAuth = (props: IRequireAuthProps) => {
  const { children } = props
  const isAuth = useAuth()
  const location = useLocation()

  if (!isAuth) {
    return <Navigate to={routes.register} state={{ form: location }} replace />
  }

  return children
}