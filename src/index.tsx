import { StoreProvider } from 'App/providers/StoreProvider'
import { App } from 'App/ui'
import React from 'react'
import ReactDOM from 'react-dom/client'

const rootContainer = document.getElementById('root')
const root = ReactDOM.createRoot(rootContainer!)

root.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
)
