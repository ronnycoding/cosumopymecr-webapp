/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import theme from 'theme'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from 'easy-peasy'
import { store } from 'state'
// import { PersistGate } from 'redux-persist/integration/react'

type AppProviderProps = {
  children: JSX.Element
}
export default function AppProvider({ children }: AppProviderProps) {
  return (
    <BrowserRouter>
      <StoreProvider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        {/* </PersistGate> */}
      </StoreProvider>
    </BrowserRouter>
  )
}
