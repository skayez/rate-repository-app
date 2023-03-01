import Text from './Text';
import { useContext } from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link } from "react-router-native";
import { useQuery, useApolloClient } from '@apollo/client';
import { GET_USER } from '../graphql/queries';

import AuthStorageContext from '../contexts/AuthStorageContext';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24292e',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexGrow: 1
  }, 
  item: {
    lineHeight: 50
  }
});

const AppBar = () => {
  const apolloClient = useApolloClient()
  const authStorage = useContext(AuthStorageContext)

  const SignOut = () => {
    authStorage.removeAccessToken()
    apolloClient.resetStore()
  }

  const SignInOutButton = () => {
    const { data } = useQuery(GET_USER)

    if (!data.me) return (
      <Link to="/signin">
        <Text style={styles.item} color='header' fontWeight='bold'>Sign in</Text>
      </Link>
    )
    
    return (
      <Link onPress={SignOut}>
        <Text style={styles.item} color='header' fontWeight='bold'>Sign out</Text>
      </Link>
    )
  }

  return (
    <View>
      <ScrollView horizontal contentContainerStyle={styles.container}>
        <Link to="/repositories">
          <Text style={styles.item} color='header' fontWeight='bold'>Repositories</Text>
        </Link>
        <Pressable>
          <Text style={styles.item} color='header' fontWeight='bold'>Create a review</Text>
        </Pressable>
        <SignInOutButton />
      </ScrollView>
    </View>
  );
};

export default AppBar;