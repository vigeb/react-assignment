import * as ActionType from './constants'
import axios from 'axios'
import { exchangeRefreshToken } from '../../../global/authModule'




export const actSubmitCourse = (submitCourse, updateMode, id) => {
    const credentials = localStorage.getItem("credentials") && JSON.parse(localStorage.getItem("credentials"))
    

    // console.log('accessToken: ', accessToken)
    return async (dispatch) => {
        try {
            if (!credentials.refreshToken) return dispatch(actSubmitCourseFailed('unauthorized'))
    
            dispatch(actSubmitCourseRequest())
            const tokenData = await exchangeRefreshToken(credentials.refreshToken)
    
            const idToken = tokenData.data.id_token
    
            if (updateMode) {
                const updatedCourse = await axios({
                    url: `https://react-asignment-default-rtdb.asia-southeast1.firebasedatabase.app/courses/${id}.json?auth=${idToken}`,
                    method: 'PUT',
                    data: submitCourse,
                })
                console.log('updated course', updatedCourse.data)
                dispatch(actSubmitCourseSuccess(updatedCourse.data))
            } else {
                const createdCourse = await axios({
                    url: `https://react-asignment-default-rtdb.asia-southeast1.firebasedatabase.app/courses.json?auth=${idToken}`,
                    method: 'POST',
                    data: submitCourse,
                })
    
                // console.log('course create', createdCourse.data)
                dispatch(actSubmitCourseSuccess(createdCourse.data))
            }
        } catch (err) {
            console.log('create err', err)
            dispatch(actSubmitCourseFailed(err))
        }
    }
}
const actSubmitCourseRequest = () => {
    return {
        type: ActionType.SUBMIT_COURSE_REQUEST
    }
}
const actSubmitCourseSuccess = (data) => {
    return {
        type: ActionType.SUBMIT_COURSE_SUCCESS,
        payload: data
    }
}
const actSubmitCourseFailed = (err) => {
    return {
        type: ActionType.SUBMIT_COURSE_FAILED,
        payload: err
    }
}