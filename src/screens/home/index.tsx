/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Redirect } from 'react-router-dom'

import useHome from './home.hook'
import useCurrentUser from 'hooks/useCurrentUser'

function HomeScreen() {
  const { isLoading, userId } = useHome()
  const { currentUser } = useCurrentUser()

  if (Object.keys(currentUser).length === 0) return <Redirect to={'/login'} />

  return (
    <div>
      <h1
        sx={{
          color: 'text',
          fontFamily: 'heading',
        }}>
        HomeScreen {isLoading ? 'loading' : 'loaded'}, userId {userId}
      </h1>
      <pre>
        {JSON.stringify(currentUser, null, 2)}
      </pre>
    </div>
  )
}

export default HomeScreen