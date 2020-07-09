import React from 'react';
import {connect} from 'react-redux';
import {Text, View, Button} from 'react-native';
import * as Screens from '../../constants/screens';

class Home extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text>{JSON.stringify(this.props.order)}</Text>
        <Button
          title="Go to qr code scanner"
          onPress={() => navigation.push(Screens.QRCODE_SCANNER)}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.order,
});

export default connect(mapStateToProps)(Home);
