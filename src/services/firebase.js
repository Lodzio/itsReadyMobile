import firestore from '@react-native-firebase/firestore';

export const ordersCollection = firestore().collection('order');
