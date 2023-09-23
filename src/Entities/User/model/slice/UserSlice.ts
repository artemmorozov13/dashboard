import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserStateSchema, UserType } from "../../types/UserStateSchema";

const initialState: UserStateSchema = {
    user: null
}

const UserSlice = createSlice({
    name: "userReducer",
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserType>) => {
            state.user = action.payload
        }
    }
})

export const { actions: UserActions } = UserSlice
export const { reducer: UserReducer } = UserSlice