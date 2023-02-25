import Text from './Text';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link } from "react-router-native";
import Constants from 'expo-constants';

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
  return (
    <View>
      <ScrollView horizontal contentContainerStyle={styles.container}>
        <Link to="/repositories">
          <Text style={styles.item} color='header' fontWeight='bold'>Repositories</Text>
        </Link>
        <Pressable>
          <Text style={styles.item} color='header' fontWeight='bold'>Create a review</Text>
        </Pressable>
        <Link to="/signin">
          <Text style={styles.item} color='header' fontWeight='bold'>Sign in</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;