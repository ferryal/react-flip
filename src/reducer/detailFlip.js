import { DETAILFLIP } from '../actions/ActionTypes';

const initialState = {
  loading: false,
  detail: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
  case DETAILFLIP.LOADING:
    return {
      ...state,
      loading: true,
    };
  case DETAILFLIP.FETCH_DETAIL_SUCCESS:
    return {
      ...state,
      loading: false,
      detail: action.payload.data,
    };
  case DETAILFLIP.RESET_DETAIL:
    return {
      ...state,
      detail: state.detail,
    };
  default:
    return state;
  }
};
