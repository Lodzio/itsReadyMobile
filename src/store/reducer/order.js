import {CLEAR_ORDER, UPDATE_ORDER} from '../action/actionTypes';
import {ORDER_STATES} from '../../constants/order';

const initialState = {
  tag: null,
  FCMToken: null,
  state: ORDER_STATES.none,
  createdAt: null,
  updatedAt: null,
  finishTime: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ORDER:
      return {
        ...state,
        ...initialState,
      };
    case UPDATE_ORDER:
      return {
        ...state,
        ...action.order,
      };
    default:
      return state;
  }
};

export default reducer;
