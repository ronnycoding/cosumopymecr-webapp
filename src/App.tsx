/** @jsx jsx */
import { jsx } from 'theme-ui'
import AppProvider from 'components/AppProvider'
import {
  Switch,
  Route,
} from 'react-router-dom'
import FacebookCallBack from 'screens/facebook'
import configureAmplify from 'config/amplify'

import WelcomeScreen from 'screens/welcome'
import HomeScreen from 'screens/home'
import LoginScreen from 'screens/login'
import SignUpScreen from 'screens/signup'

configureAmplify()

function App() {
  return (
    <div>
      <AppProvider>
        <Switch>
          <Route path="/callback/facebook/:callBackResponse">
            <FacebookCallBack />
          </Route>
          <Route path="/user/:userId">
            <HomeScreen />
          </Route>
          <Route path="/login">
            <LoginScreen />
          </Route>
          <Route path="/signup">
            <SignUpScreen />
          </Route>
          <Route path="/">
            <WelcomeScreen />
          </Route>
        </Switch>
      </AppProvider>
    </div>
  )
}

export default App
