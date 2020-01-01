/** @jsx jsx */
import { jsx } from 'theme-ui'

import useFacebook from './facebook.hook'

function FacebookCallBack() {
  const { isLoading, callBackResponse } = useFacebook()
  return (
    <div>
      <h1
        sx={{
          color: 'text',
          fontFamily: 'heading',
        }}>
        FacebookCallBack {isLoading ? 'loading' : 'loaded'}, callBackResponse
        <pre>
          {JSON.stringify(callBackResponse, null, 2)}
        </pre>
      </h1>
    </div>
  )
}

export default FacebookCallBack