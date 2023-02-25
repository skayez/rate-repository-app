import Main from './src/components/Main';
import { StyleSheet, View, StatusBar } from 'react-native';
import { NativeRouter } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e1e4e8',
    flexGrow: 1
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <NativeRouter>
        <Main />
      </NativeRouter>
      <StatusBar style="auto" />
    </View>
  )
};

export default App;