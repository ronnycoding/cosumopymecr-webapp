import { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function useFacebook() {
  // Screen loading
  const [isLoading, setIsLoading] = useState(true)
  const { callBackResponse } = useParams()

  useLayoutEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000);
  })

  return {
    isLoading,
    callBackResponse
  }
}

export default useFacebook