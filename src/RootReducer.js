import { combineReducers } from 'redux';
import { reducer as listFlip } from './reducer/listFlip';
import { reducer as detailFlip } from './reducer/detailFlip';

export default combineReducers({
  listFlip,
  detailFlip,
});
