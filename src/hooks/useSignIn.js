import { useContext } from 'react';
import { useMutation, useApolloClient } from '@apollo/client';
import { LOG_IN } from '../graphql/mutations';

import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext)
  const [mutate, result] = useMutation(LOG_IN);
  const apolloClient = useApolloClient()

  const signIn = async ({ username, password }) => {
    await mutate({ variables: { username, password } })
    authStorage.setAccessToken(result.data.authenticate.accessToken)
    apolloClient.resetStore()
    return result
  };

  return [signIn, result];
};

export default useSignIn