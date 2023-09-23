import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { UserStateSchema } from "Entities/User";
import { AxiosInstance } from "axios";
import { createReduxStore } from "../lib/store";
import { RegisterByEmailStateSchema } from "Features/RegisterByEmail/types/RegisterByEmailStateSchema";

export interface StateSchema {
    userReducer: UserStateSchema

    // Async reducers
    registerReducer?: RegisterByEmailStateSchema
}

interface ThunkExtraArgs {
    api: AxiosInstance
}

export interface ThunkApiType<T> {
    rejectValue: T
    extra: ThunkExtraArgs
}

export type StateSchemaKeys = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKeys, reducer: Reducer) => void
    remove: (key: StateSchemaKeys) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
