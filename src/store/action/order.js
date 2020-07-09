import {ordersCollection} from '../../services/firebase';
import firebase from '@react-native-firebase/app';
import {Alert} from 'react-native';
import {UPDATE_ORDER, CLEAR_ORDER} from './actionTypes';

export const fetchNewOrder = (orderId, navigation) => async (dispatch) => {
  if (await firebase.messaging().hasPermission()) {
    const token = await firebase.messaging().getToken();
    console.log(token);
    ordersCollection
      .doc(orderId)
      .get()
      .then((doc) => {
        dispatch(setOrder(doc.data()));
        navigation.pop();
        ordersCollection.doc(orderId).update({FCMToken: token});
      })
      .catch((error) => {
        Alert.alert('nie udało sie znaleźć zamówienia');
        console.error(error);
      });
  }
};

const setOrder = (order) => ({
  type: UPDATE_ORDER,
  order,
});

const clearOrder = (order) => ({
  type: CLEAR_ORDER,
});
