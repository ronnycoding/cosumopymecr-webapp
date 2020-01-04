/** @jsx jsx */
import { jsx } from 'theme-ui'

import useCurrentUser from 'hooks/useCurrentUser'

function Welcome() {
  const { currentUser } = useCurrentUser()

  return (
    <div>
      <h1
        sx={{
          color: 'text',
          fontFamily: 'heading',
        }}>
        welcome
      </h1>
      <pre>
        {JSON.stringify(currentUser, null, 2)}
      </pre>
    </div>
  )
}

export default Welcome
