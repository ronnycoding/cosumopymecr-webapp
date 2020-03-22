import gql from 'graphql-tag'

export const CREATE_USER_BY_EMAIL = gql`
  mutation signUpByEmail($firstName: String, $lastName: String, $email: String!, $password: String!) {
    signUpByEmail(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
    }
  }
`
