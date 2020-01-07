const ENV = {
  development: {
    Auth: {
      identityPoolId: 'us-east-1:0fa90009-c115-4ea7-afa9-748eadc66c44',
      region: 'us-east-1',
      userPoolId: 'us-east-1_LQvZhtgL8',
      userPoolWebClientId: '1agnhgp7g3g0n6m8k70i1c625g',
    },
    Storage: {
      bucket: 'loyaltyadvertisingalicea',
    },
    aws_appsync_graphqlEndpoint: 'https://2x6qy7awjjcbdlonpuhdsffen4.appsync-api.us-east-1.amazonaws.com/graphql',
    aws_appsync_region: 'us-east-1',
    aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS', // You have configured Auth with Amazon Cognito User Pool ID and Web Client Id
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
    aws_appsync_graphqlEndpoint: '',
    aws_appsync_region: '',
    aws_appsync_authenticationType: '', // You have configured Auth with Amazon Cognito User Pool ID and Web Client Id
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
    aws_appsync_graphqlEndpoint: '',
    aws_appsync_region: '',
    aws_appsync_authenticationType: '', // You have configured Auth with Amazon Cognito User Pool ID and Web Client Id
  }
}

function getEnvVars(env = '') {
  if (env === 'production') return ENV.production
  if (env === 'staging') return ENV.staging
  return ENV.development
}

export default getEnvVars(process.env.REACT_APP_STAGE)