import React from 'react'
import { Redirect } from 'react-router-dom'
import Link from '@material-ui/core/Link'

// import useHome from './home.hook'
import { useUser } from 'state/user'

function HomeScreen() {
  // const { isLoading, userId, homeData } = useHome()
  const {
    user,
    resetUser,
  } = useUser()

  if (Object.keys(user).length === 0) return <Redirect to={'/login'} />

  return (
    <div>
      <h1
        sx={{
          color: 'text',
          fontFamily: 'heading',
        }}>
        HomeScreen
      </h1>
      <Link href="#" onClick={resetUser}>
        Logout
      </Link>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  )
}

export default HomeScreen