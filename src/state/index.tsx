import React from 'react'

import { UserProvider } from './user'

type StateProviderProps = {
  children: JSX.Element
}

export default function StateProvider({ children }: StateProviderProps) {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  )
}