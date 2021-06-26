import { combineReducers } from 'redux'
import courseListReducer from '../../containers/HomeTemplate/HomePage/modules/reducer'
import courseDetailReducer from '../../containers/HomeTemplate/CoursePage/modules/reducer'

const rootReducer = combineReducers({
    courseListReducer,
    courseDetailReducer,
})

export default rootReducer