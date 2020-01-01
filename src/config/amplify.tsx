import Amplify from 'aws-amplify'

import envVars from './config'

export default function configureAmplify() {
  const { Auth, Storage } = envVars || {}
  Amplify.configure({
    Auth,
    Storage
  })
}