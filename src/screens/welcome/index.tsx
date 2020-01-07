import React from 'react'
// import { API, graphqlOperation } from 'aws-amplify'
import { Link } from 'react-router-dom'

import { useUser } from 'state/user'

// import { getWelcomeDataQuery } from './welcome.graphql'

function Welcome() {
  const {
    user,
  } = useUser()

  // useEffect(() => {
  //   async function getWelcomeData() {
  //     // @ts-ignore
  //     const welcomeData = await API.graphql({...graphqlOperation(getWelcomeDataQuery), authMode: 'AMAZON_COGNITO_USER_POOLS'})
  //     console.log(welcomeData)
  //   }

  //   getWelcomeData()
  // }, [])

  return (
    <div>
      <h1
        sx={{
          color: 'text',
          fontFamily: 'heading',
        }}>
        welcome
      </h1>
      <Link to="/login">
        Login
      </Link>{' '}
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  )
}

export default Welcome
