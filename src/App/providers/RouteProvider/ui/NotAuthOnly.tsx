import { useAuth } from "Shared/hooks/useAuth/useAuth"
import { routes } from "Shared/lib/routes/routesConfig"
import { ReactNode } from "react"
import { Navigate, useLocation } from "react-router-dom"

interface NotAuthOnlyProps {
    children: ReactNode
}

export const NotAuthOnly = (props: NotAuthOnlyProps) => {
    const { children } = props
    const isAuth = useAuth()
    const location = useLocation()
  
    if (isAuth) {
      return <Navigate to={routes.profile} state={{ form: location }} replace />
    }
  
    return children
  }