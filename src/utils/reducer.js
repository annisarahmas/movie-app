import { combineReducers } from "redux";
import HomeReducer from '../store/home/reducer';

const reducers = combineReducers({
  home: HomeReducer
})

export default reducers;
