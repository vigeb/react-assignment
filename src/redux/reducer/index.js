import { combineReducers } from 'redux'
import courseListReducer from '../../containers/HomeTemplate/HomePage/modules/reducer'
import courseDetailReducer from '../../containers/CourseDetail/modules/reducer'
import signUpReducer from '../../containers/SignUpForm/modules/reducer'
import logInReducer from '../../containers/LoginForm/modules/reducer'
import courseDeleteReducer from '../../components/CourseManageItem/modules/reducer'
const rootReducer = combineReducers({
    courseListReducer,
    courseDetailReducer,
    signUpReducer,
    logInReducer,

    courseDeleteReducer
})

export default rootReducer