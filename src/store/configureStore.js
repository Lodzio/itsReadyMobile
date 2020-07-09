import {applyMiddleware, combineReducers, createStore} from 'redux';
import orderReducer from './reducer/order';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
  order: orderReducer,
});
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
