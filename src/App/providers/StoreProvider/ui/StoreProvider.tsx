import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { StateSchema } from "../types/stateSchema";
import { createReduxStore } from "../lib/store";

interface StoreProviderProps {
    children: ReactNode
    initialState?: StateSchema
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children, initialState } = props

    const store = createReduxStore({ initialState })

    return (
        <Provider store={store}>{children}</Provider>
    )
}