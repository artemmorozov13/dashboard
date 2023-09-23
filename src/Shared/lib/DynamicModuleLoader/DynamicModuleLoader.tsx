import { Reducer } from "@reduxjs/toolkit"
import { ReduxStoreWithManager, StateSchemaKeys } from "App/providers/StoreProvider/types/stateSchema"
import { FC, ReactNode, useEffect } from "react"
import { useStore } from "react-redux"


export type ReducersList = {
  [name in StateSchemaKeys]?: Reducer
}

interface IDynamicModuleLoader {
  reducers: ReducersList
  children: ReactNode
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<IDynamicModuleLoader> = (props) => {
  const { reducers, children, removeAfterUnmount = true } = props
  const store = useStore() as ReduxStoreWithManager

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKeys, reducer)
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKeys)
        })
      }
    }
  }, [])

  console.log(store)

  return (
      <>{children}</>
  )
}