import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import StateProvider from 'state'

type AppProviderProps = {
  children: JSX.Element
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <StateProvider>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </StateProvider>
  )
}
