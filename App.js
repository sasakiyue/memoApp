// import React from 'react';
// import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

// import Appbar from './src/components/Appbar';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import LoginScreen from './src/screens/LoginScreen';

/*
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <LoginScreen />
      </View>
    );
  }
}
*/
const App = StackNavigator({
  Home: { screen: MemoListScreen },
  Login: { screen: LoginScreen },
  MemoDetail: { screen: MemoDetailScreen },
}, {
  navigationOptions: {
    headerTitle: 'MEMOT',
    headerStyle: {
      backgroundColor: '#265366',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 78,
  },
});
*/

export default App;
