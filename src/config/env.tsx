const ENV = {
  local: {
    aws: {
      Auth: {
        identityPoolId: 'us-east-1:564e15ca-2106-4397-9ad2-839736889053',
        region: 'us-east-1',
        userPoolId: 'us-east-1_ZSomzgcCZ',
        userPoolWebClientId: '4k9d8g6cr55ifk0e0ndm5e4bvv',
      },
      Storage: {
        bucket: 'loyaltyadvertisingalicea',
      },
    },
    coreApi: {
      uri: 'http://localhost:8070',
    }
  },
  development: {
    aws: {
      Auth: {
        identityPoolId: 'us-east-1:564e15ca-2106-4397-9ad2-839736889053',
        region: 'us-east-1',
        userPoolId: 'us-east-1_ZSomzgcCZ',
        userPoolWebClientId: '4k9d8g6cr55ifk0e0ndm5e4bvv',
      },
      Storage: {
        bucket: 'loyaltyadvertisingalicea',
      },
    },
    coreApi: {
      uri: '',
    }
  },
  staging: {
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
    }
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
  if (env === 'development') return ENV.development
  return ENV.local
}

export default getEnvVars(process.env.REACT_APP_STAGE)