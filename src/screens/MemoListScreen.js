// import RNFetchBlob from 'react-native-fetch-blob';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import RNImagePicker from 'react-native-image-picker';
// import firebase from 'react-native-firebase';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  // eslint-disable-next-line
  handlePress() {
    // RNImagePicker.showImagePicker({}, res => console.log(res));
    firebase.storage()
      .ref()
      .put('file:///Users/sasakiyo/Documents/de-vate/doprj/samplefile');
  }

  render() {
    return (
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation} />
        <CircleButton onPress={this.handlePress.bind(this)}>
          {'\uf067'}
        </CircleButton>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFDF6',
  },
});

export default MemoListScreen;
