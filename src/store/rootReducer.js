import { combineReducers } from './index'
import { reducer as homeReducer } from '../pages/home'

export default combineReducers({
  home: homeReducer
})