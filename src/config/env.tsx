const ENV = {
  development: {
    Auth: {
      identityPoolId: 'us-east-1:fcf5a9d3-b641-492b-b4b4-2eb62afb185b',
      region: 'us-east-1',
      userPoolId: 'us-east-1_iUCE4Womz',
      userPoolWebClientId: '2snvhgqortmn190gvr9p59g9cm',
    },
    Storage: {
      bucket: 'loyaltyadvertisingalicea',
    },
    // aws_appsync_graphqlEndpoint: '',
    // aws_appsync_region: 'us-east-1',
    // aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
  },
  staging: {
    Auth: {
      identityPoolId: '',
      region: '',
      userPoolId: '',
      userPoolWebClientId: '',
    },
    Storage: {
      bucket: '',
    },
    // aws_appsync_graphqlEndpoint: '',
    // aws_appsync_region: '',
    // aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
  },
  production: {
    Auth: {
      identityPoolId: '',
      region: '',
      userPoolId: '',
      userPoolWebClientId: '',
    },
    Storage: {
      bucket: '',
    },
    // aws_appsync_graphqlEndpoint: '',
    // aws_appsync_region: '',
    // aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
  }
}

function getEnvVars(env = '') {
  if (env === 'production') return ENV.production
  if (env === 'staging') return ENV.staging
  return ENV.development
}

export default getEnvVars(process.env.REACT_APP_STAGE)