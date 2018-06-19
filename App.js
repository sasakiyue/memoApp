// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import RNFetchBlob from 'react-native-fetch-blob';
import { StackNavigator } from 'react-navigation';
import firebase from 'firebase';
// import firebase from 'react-native-firebase';

// import Appbar from './src/components/Appbar';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import LoginScreen from './src/screens/LoginScreen';
import PhotoPicker from './src/screens/PhotoPicker';

import ENV from './env.json';

const config = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDRE_ID,
};
firebase.initializeApp(config);

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
  Login: { screen: LoginScreen },
  Home: { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
}, {
  navigationOptions: {
    headerTitle: 'MEMOT',
    headerStyle: {
      backgroundColor: '#265366',
    },
    headerTintColor: '#fff',
    headerBackTitle: null,
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
