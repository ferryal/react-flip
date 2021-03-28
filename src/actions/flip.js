import axios from 'axios';
import config from '../config';
import { LISTFLIP, DETAILFLIP } from './ActionTypes';

function loading() {
  return {
    type: LISTFLIP.LOADING,
  };
}

function fetchSuccess(data) {
  return {
    type: LISTFLIP.FETCH_SUCCESS,
    payload: { data },
  };
}

function fetchFailed() {
  return {
    type: LISTFLIP.FETCH_FAILED,
  };
}

export function resetDetail() {
  return {
    type: DETAILFLIP.RESET_DETAIL,
  };
}

export function fetchList() {
  return (dispatch) => {
    dispatch(loading());
    axios.get(`${config.apiUrl}/frontend-test`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }).then((res) => {
      if (res.status === 200) {
        const response = res.data;
        dispatch(fetchSuccess(response));
      } else {
        dispatch(fetchFailed());
      }
    }).catch(() => {
      dispatch(fetchFailed());
    });
  };
}

export function fetchDetail(data) {
  return {
    type: DETAILFLIP.FETCH_DETAIL_SUCCESS,
    payload: { data },
  };
}
