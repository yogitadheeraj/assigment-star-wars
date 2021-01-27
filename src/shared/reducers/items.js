import { combineReducers } from 'redux';
import { LOAD_PLANETS, UPDATE_SRC } from '../constants';
import user from './user'

function searchStr(state = '', action) {
  switch (action.type) {
    case UPDATE_SRC:
      return action.searchStr;
    default:
      return state;
  }
}

function item(state = {
  isFetching: true,
  searchStr: '',
  items: [],
}, action) {
  switch (action.type) {
    case LOAD_PLANETS:
      return Object.assign({}, state, {
        searchStr: action.data.search,
        isFetching: action.data.isFetching,
        items: action.data.data,
      });
    default:
      return state;
  }
}

export default combineReducers({
  item,
  user,
  searchStr,
});
