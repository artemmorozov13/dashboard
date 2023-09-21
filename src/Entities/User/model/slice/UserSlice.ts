import { createSlice } from "@reduxjs/toolkit";
import { UserStateSchema } from "../../types/UserStateSchema";

const initialState: UserStateSchema = {
    user: null
}

const UserSlice = createSlice({
    name: "userReducer",
    initialState: initialState,
    reducers: {

    }
})

export const { actions: UserActions } = UserSlice
export const { reducer: UserReducer } = UserSlice