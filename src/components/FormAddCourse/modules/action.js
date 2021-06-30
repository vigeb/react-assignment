import * as ActionType from './constants'
import axios from 'axios'




export const actSubmitCourse = (submitCourse, updateMode) => {
    let accessToken = ''
    if (localStorage.getItem("credentials")) {
        accessToken = JSON.parse(localStorage.getItem("credentials")).accessToken
    }
    console.log('accessToken: ', accessToken)
    return (dispatch) => {

        if (updateMode) {
            dispatch(actSubmitCourseRequest())
            axios({
                url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/CapNhatKhoaHoc',
                method: "PUT",
                data: submitCourse,
                // header: {
                //     Authorization: 'Bearer' + accessTokenAA
                // }
            })
                .then((res) => {
                    console.log(res.data)
                    dispatch(actSubmitCourseSuccess(res.data))
                })
                .catch((err) => {

                    dispatch(actSubmitCourseFailed(err))
                })
        } else {
            dispatch(actSubmitCourseRequest())
            axios({
                url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc',
                method: "POST",
                data: submitCourse,
                headers: {
                    Authorization: 'Bearer ' + accessToken
                }
            })
                .then((res) => {
                    console.log(res.data)
                    dispatch(actSubmitCourseSuccess(res.data))
                })
                .catch((err) => {
                    console.log('accessToken là: ' + accessToken + 'lỗi là: ' + err)
                    dispatch(actSubmitCourseFailed(err))
                })
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