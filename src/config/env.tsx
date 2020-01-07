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
    // AppSync: {
    //   Default: {
    //       ApiUrl: 'http://35.175.200.211:8080/v1/graphql',
    //       Region: 'us-east-1',
    //       AuthMode: 'AMAZON_COGNITO_USER_POOLS',
    //   }
    // },
    // awsAPIPlugin: {
    //   apiBackend: {
    //       endpointType: 'GraphQL',
    //       endpoint: 'http://35.175.200.211:8080/v1/graphql',
    //       region: 'us-east-1',
    //       authorizationType: 'AMAZON_COGNITO_USER_POOLS',
    //   }
    // }
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
    API: {
      graphql_headers: async () => ({
        'x-hasura-admin-secret': 'Lg8HcwtexBKwAgU4Aq'
      }),
      // graphql_endpoint: 'http://35.175.200.211:8080/v1/graphql',
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
    API: {
      graphql_headers: async () => ({
        'x-hasura-admin-secret': 'Lg8HcwtexBKwAgU4Aq'
      }),
      // graphql_endpoint: 'http://35.175.200.211:8080/v1/graphql',
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