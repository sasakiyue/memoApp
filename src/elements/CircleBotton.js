import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';

class CircleBotton extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentWillMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome,
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { style, color } = this.props;

    let bgColor = '#E31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31676';
    }

    return (
      <View style={[styles.CircleBotton, style, { backgroundColor: bgColor }]}>
        {
          this.state.fontLoaded ? (
            <Text style={[styles.CircleBottonTitle, { color: textColor }]}>
              {this.props.children}
            </Text>
          ) : null
        }
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
    // backgroundColor: '#E31676',
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
    fontFamily: 'FontAwesome',
    fontSize: 24,
    lineHeight: 24,
    color: '#fff',
  },
});

export default CircleBotton;
