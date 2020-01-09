import { useLayoutEffect, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { API, graphqlOperation } from 'aws-amplify'
import { getWelcomeDataQuery } from './home.graphql'


function useHome() {
  // Screen loading
  const [isLoading, setIsLoading] = useState(true)
  const [ homeData, setHomeData ] = useState({})
  const { userId } = useParams()

  useLayoutEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000);
  })

  useEffect(() => {
    async function getWelcomeData() {
      // @ts-ignore
      const welcomeData = await API.graphql({
        ...graphqlOperation(getWelcomeDataQuery),
        // @ts-ignore
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      })
      setHomeData(welcomeData)
    }

    getWelcomeData()
  }, [])

  return {
    isLoading,
    userId,
    homeData,
  }
}

export default useHome