import { FlatList, View, StyleSheet, Text } from 'react-native';

import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories';


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 10
  }
});

const RepositoryList = () => {
  const { data, loading } = useRepositories()

  if (loading) return (
    <View>
      <Text>
        Loading...
      </Text>
    </View>
  )

  const repositoryNodes = data.repositories.edges.map(value => value.node)

  return (
    <FlatList data={repositoryNodes}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <RepositoryItem item={item}/>
        </View>
      )}
    />
  );
};

export default RepositoryList;