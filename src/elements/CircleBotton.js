import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CircleBotton extends React.Component {
  render() {
    return (
      <View style={styles.CircleBotton}>
        <Text style={styles.CircleBottonTitle}>{this.props.children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  CircleBotton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    zIndex: 10,
  },
  CircleBottonTitle: {
    fontSize: 32,
    lineHeight: 32,
    color: '#fff',
  },
});

export default CircleBotton;
