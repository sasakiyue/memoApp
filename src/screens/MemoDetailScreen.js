import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.memoheader}>
          <Text style={styles.memoheaderTitle}>講座のアイディア</Text>
          <Text style={styles.memoheaderDate}>2018/05/26</Text>
        </View>

        <View style={styles.memoContent}>
          <Text>
            講座のアイディアです。
          </Text>
        </View>

        <CircleButton color="white" style={styles.editBotton}>{'\uf303'}</CircleButton>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoheader: {
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    padding: 10,
  },
  memoheaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  memoheaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  memoContent: {
    padding: 20,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  editBotton: {
    position: 'absolute',
    top: 80,
    right: 40,
  },
});

export default MemoDetailScreen;
