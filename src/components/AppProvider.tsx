/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import theme from 'theme'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from 'easy-peasy'
import { store } from 'state'

type AppProviderProps = {
  children: JSX.Element
}
export default function AppProvider({ children }: AppProviderProps) {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </ThemeProvider>
    </StoreProvider>
  )
}
