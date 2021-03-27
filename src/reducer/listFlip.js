import { LISTFLIP } from '../actions/ActionTypes';

const initialState = {
  loading: false,
  list: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
  case LISTFLIP.LOADING:
    return {
      ...state,
      loading: true,
    };
  case LISTFLIP.FETCH_SUCCESS:
    return {
      ...state,
      loading: false,
      list: action.payload.data,
    };
  case LISTFLIP.FETCH_FAILED:
    return {
      ...state,
      loading: false,
    };
  default:
    return state;
  }
};
