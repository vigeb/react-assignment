import { combineReducers } from 'redux'
import CourseReducer from './course'

const rootReducer = combineReducers({
    courses: CourseReducer
})

export default rootReducer