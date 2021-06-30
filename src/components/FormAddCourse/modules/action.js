import * as ActionType from './constants'
import axios from 'axios'



export const NewCourse = (newCourse) => {
    let accessToken = ''
    if (localStorage.getItem("credentials")) {
        accessToken = JSON.parse(localStorage.getItem("credentials")).accessToken
    }
    return (dispatch) => {
        dispatch(actNewCourseRequest())
        axios({
            url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc',
            method: "POST",
            data: newCourse,
            header: {
                Authorization: 'Bearer' + accessToken
            }
        })
            .then((res) => {
                console.log(res.data)
                dispatch(actNewCourseSuccess(res.data))
            })
            .catch((err) => {

                dispatch(actNewCourseFailed(err))
            })
    }
}

const actNewCourseRequest = () => {
    return {
        type: ActionType.NEW_COURSE_REQUEST
    }
}
const actNewCourseSuccess = (data) => {
    return {
        type: ActionType.NEW_COURSE_SUCCESS,
        payload: data
    }
}
const actNewCourseFailed = (err) => {
    return {
        type: ActionType.NEW_COURSE_FAILED,
        payload: err
    }
}