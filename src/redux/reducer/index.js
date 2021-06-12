import { combineReducers } from 'redux'
// import CourseReducer from './course'
import courseListReducer from '../../containers/HomeTemplate/HomePage/modules/reducer'

const rootReducer = combineReducers({
    courseListReducer,
})

export default rootReducer