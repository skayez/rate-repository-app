import { gql } from '@apollo/client';

export const LOG_IN = gql`
  mutation login($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`
