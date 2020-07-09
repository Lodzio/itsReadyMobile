/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import messaging from '@react-native-firebase/messaging';
import {name as appName} from './app.json';
import {onMessage} from './src/services/messaging';
messaging().setBackgroundMessageHandler(onMessage);
AppRegistry.registerComponent(appName, () => App);
