import { ReducersMapObject, configureStore } from "@reduxjs/toolkit"
import { API } from "Shared/api"
import { StateSchema } from "../types/stateSchema"
import { UserReducer } from "Entities/User"

interface CreateReduxStoreType {
    initialState?: StateSchema
}

export const createReduxStore = (options: CreateReduxStoreType) => {
    const { initialState } = options

    const reducers: ReducersMapObject<StateSchema> = {
        userReducer: UserReducer
    }

    const store = configureStore<StateSchema>({
        preloadedState: initialState,
        reducer: reducers,
        devTools: true,
        // @ts-expect-error
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
              extraArgument: {
                api: API,
              }
            }
        })
    })

    return store
}   