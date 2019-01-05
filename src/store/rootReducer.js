import { combineReducers } from './index'
import { reducer as homeReducer } from '../components/home'

export default combineReducers({
  home: homeReducer
})