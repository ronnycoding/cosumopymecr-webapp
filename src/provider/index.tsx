import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'

import apolloClient from 'config/apolloClient'
import GlobalThemeOverride from 'theme'
import StateProvider from 'state'

type AppProviderProps = {
  children: JSX.Element
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    <ApolloProvider client={apolloClient}>
      <StateProvider>
        <GlobalThemeOverride>
          <BrowserRouter>{children}</BrowserRouter>
        </GlobalThemeOverride>
      </StateProvider>
    </ApolloProvider>
  )
}
