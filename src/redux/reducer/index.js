import { combineReducers } from 'redux'
// import CourseReducer from './course'
import courseListReducer from '../../containers/HomeTemplate/HomePage/modules/reducer'
import courseDetailReducer from '../../containers/CourseDetail/modules/reducer'

const rootReducer = combineReducers({
    courseListReducer,
    courseDetailReducer
})

export default rootReducer