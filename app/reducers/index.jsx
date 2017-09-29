import { combineReducers } from 'redux'
import students from './students'
import campuses from './campuses'
import drawer from './drawer'

const rootReducer = combineReducers({
  students,
  campuses,
  currentCampusId: drawer
})

export default rootReducer
