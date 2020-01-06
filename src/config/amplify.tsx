import Amplify from 'aws-amplify'

import envVars from './env'

export default function configureAmplify() {
  const { Auth, Storage, API } = envVars || {}
  Amplify.configure({
    Auth,
    Storage,
    API,
  })
}