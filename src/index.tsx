import { StoreProvider } from 'App/providers/StoreProvider'
import { App } from 'App/ui'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

const rootContainer = document.getElementById('root')
const root = ReactDOM.createRoot(rootContainer!)

root.render(
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>,
)
