/** @jsx jsx */
import { jsx } from 'theme-ui'

import useHome from './home.hook'

function HomeScreen() {
  const { isLoading, userId } = useHome()
  return (
    <div>
      <h1
        sx={{
          color: 'text',
          fontFamily: 'heading',
        }}>
        HomeScreen {isLoading ? 'loading' : 'loaded'}, userId {userId}
      </h1>
    </div>
  )
}

export default HomeScreen