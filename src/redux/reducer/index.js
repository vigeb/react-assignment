import { combineReducers } from 'redux'
import courseListReducer from '../../containers/HomeTemplate/HomePage/modules/reducer'
import courseDetailReducer from '../../containers/HomeTemplate/CourseDetailPage/modules/reducer'
import signUpReducer from '../../containers/HomeTemplate/SignUpForm/modules/reducer'
import logInReducer from '../../containers/HomeTemplate/LoginForm/modules/reducer'
import courseDeleteReducer from '../../components/CourseManageItem/modules/reducer'
// import authReducer from '../global/authModules/reducer'
import getCategoryReducer from '../../containers/AdminTemplate/CategoryManagePage/modules/reducer'
import enrollReducer from '../modules/enrollment/reducer'

const rootReducer = combineReducers({
    courseListReducer,
    courseDetailReducer,
    signUpReducer,
    logInReducer,
    courseDeleteReducer,
    getCategoryReducer,
    enrollReducer,
})

export default rootReducer