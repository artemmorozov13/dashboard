import { ReducersMapObject, configureStore } from "@reduxjs/toolkit"
import { api } from "Shared/api"
import { StateSchema } from "../types/stateSchema"
import { UserReducer } from "Entities/User"
import { createReducerManager } from "./ReducerManager"

interface CreateReduxStoreType {
    initialState?: StateSchema
}

export const createReduxStore = (options: CreateReduxStoreType) => {
    const { initialState } = options

    const reducers: ReducersMapObject<StateSchema> = {
        userReducer: UserReducer
    }

    const reducerManager = createReducerManager(reducers)

    const store = configureStore<StateSchema>({
        preloadedState: initialState,
        reducer: reducers,
        devTools: true,
        // @ts-expect-error
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
              extraArgument: {
                api: api,
              }
            }
        })
    })
    //@ts-ignore
    store.reducerManager = reducerManager

    return store
}   