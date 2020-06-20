import { combineReducers } from 'redux';
import homeWithReduxData from './pages/HomeWithRedux/duck';

export default combineReducers({
  homeWithRedux: homeWithReduxData,
});
