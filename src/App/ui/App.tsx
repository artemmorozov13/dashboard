import { AppRouter } from "App/providers/RouteProvider"
import { FC, useEffect, useState } from "react"
import "App/styles/index.scss"
import { PageLoader } from "Widgets/PageLoader"
import { api } from "Shared/api"
import { UserType } from "Entities/User/types/UserStateSchema"
import { useAppDispatch } from "Shared/hooks/useAppDispatch/useAppDispatch"
import { UserActions } from "Entities/User"

export const App: FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    (async () => {
      try {
        const userId = window.localStorage.getItem("userId")
        const response = await api.get(`/users/${userId}`)
  
        const payload: UserType = {
          email: response.data.email
        }
  
        dispatch(UserActions.setUser(payload))
      } catch (error) {
        console.log(error)
      } finally {
        setIsMounted(true)
      }
    })()
  }, [])

  if (!isMounted) {
    return (
      <PageLoader />
    )
  }

  return (
    <AppRouter />
  )
}
