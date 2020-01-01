/** @jsx jsx */
import { jsx } from 'theme-ui'
import AppProvider from 'components/AppProvider'
import {
  Switch,
  Route,
} from "react-router-dom";

import Welcome from 'screens/welcome'
import HomeScreen from 'screens/home'
import FacebookCallBack from 'screens/facebook'
import configureAmplify from 'config/amplify'

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
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </AppProvider>
    </div>
  )
}

export default App
