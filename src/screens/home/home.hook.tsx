import { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function useHome() {
  // Screen loading
  const [isLoading, setIsLoading] = useState(true)
  const { userId } = useParams()

  useLayoutEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000);
  })

  return {
    isLoading,
    userId
  }
}

export default useHome