import Amplify from 'aws-amplify'

import envVars from './env'

export default function configureAmplify() {
  const { Auth, Storage } = envVars || {}
  Amplify.configure({
    Auth,
    Storage
  })
}