import React from 'react';
import {Text, Alert} from 'react-native';
import {connect} from 'react-redux';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {fetchNewOrder} from '../../store/action';

class QRCodeScannerScreen extends React.Component {
  onRead = (event) => {
    this.props.fetchNewOrder(event.data, this.props.navigation);
  };
  render() {
    return (
      <QRCodeScanner
        onRead={this.onRead}
        flashMode={RNCamera.Constants.FlashMode.off}
        topContent={<Text>topContent</Text>}
        bottomContent={<Text>bottomContent</Text>}
      />
    );
  }
}
const mapDispatchToProps = {
  fetchNewOrder,
};

export default connect(null, mapDispatchToProps)(QRCodeScannerScreen);
