const ENV = {
  development: {
    aws: {
      Auth: {
        identityPoolId: 'us-east-1:10d55aba-74c6-4581-957e-8703b535d011',
        region: 'us-east-1',
        userPoolId: 'us-east-1_HFHwlhVNT',
        userPoolWebClientId: '49la7dn3p80baqt8dkpp4ojqci',
      },
    },
    coreApi: {
      uri: 'http://localhost:1337',
    },
  },
  staging: {
    aws: {
      Auth: {
        identityPoolId: 'us-east-1:10d55aba-74c6-4581-957e-8703b535d011',
        region: 'us-east-1',
        userPoolId: 'us-east-1_HFHwlhVNT',
        userPoolWebClientId: '49la7dn3p80baqt8dkpp4ojqci',
      },
    },
    coreApi: {
      uri: 'https://consumopymecr.herokuapp.com',
    },
  },
  production: {
    aws: {
      Auth: {
        identityPoolId: '',
        region: '',
        userPoolId: '',
        userPoolWebClientId: '',
      },
      Storage: {
        bucket: '',
      },
    },
    coreApi: {
      uri: '',
    },
  },
}

function getEnvVars(env = '') {
  if (env === 'production') return ENV.production
  if (env === 'staging') return ENV.staging
  return ENV.development
}

export default getEnvVars(process.env.REACT_APP_STAGE)
