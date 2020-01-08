import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import GlobalThemeOverride from 'theme'
import StateProvider from 'state'

type AppProviderProps = {
  children: JSX.Element
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <StateProvider>
      <GlobalThemeOverride>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </GlobalThemeOverride>
    </StateProvider>
  )
}
