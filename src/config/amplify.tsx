import Amplify from 'aws-amplify'

import envVars from './env'

export default function configureAmplify() {
  Amplify.configure(envVars)
}