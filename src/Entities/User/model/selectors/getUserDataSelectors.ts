import { StateSchema } from "App/providers/StoreProvider/types/stateSchema";

export const getUserData = (state: StateSchema) => {
    return state.userReducer.user || null
}