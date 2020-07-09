/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Alert} from 'react-native';
import * as Screens from './src/constants/screens';
import {Provider} from 'react-redux';
import HomeScreen from './src/screens/Home/Home';
import QRCodeScanner from './src/screens/QRCodeScanner/QRCodeScanner';
import configureStore from './src/store/configureStore';
const store = configureStore();
import messaging from '@react-native-firebase/messaging';
import {onMessage} from './src/services/messaging';

const Stack = createStackNavigator();
class App extends React.Component {
  unsubscribe = null;
  componentDidMount() {
    this.unsubscribe = messaging().onMessage(onMessage);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={Screens.HOME}>
            <Stack.Screen name={Screens.HOME} component={HomeScreen} />
            <Stack.Screen
              name={Screens.QRCODE_SCANNER}
              component={QRCodeScanner}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
