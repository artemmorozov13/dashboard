import { getUserData } from 'Entities/User/model/selectors/getUserDataSelectors'
import { useSelector } from 'react-redux'

export const useAuth = () => {
  const userData = useSelector(getUserData)

  if (userData) {
    return true
  }
  return false
}