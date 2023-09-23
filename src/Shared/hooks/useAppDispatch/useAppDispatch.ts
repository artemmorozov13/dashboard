import { AppDispatch } from 'App/providers/StoreProvider/types/stateSchema'
import { useDispatch } from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()