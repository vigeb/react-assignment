import * as ActionType from './constants'
import axios from 'axios'

export const actSubmitCourse = (submitCourse) => {
    let accessToken = ''
    if (localStorage.getItem("credentials")) {
        accessToken = JSON.parse(localStorage.getItem("credentials")).accessToken
    }
    return (dispatch) => {
        // ...
        if (updateMode) {
            dispatch(actSubmitCourseRequest())
            axios({
                url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/CapNhatKhoaHoc',
                method: "PUT",
                data: submitCourse,
                // header: {
                //     Authorization: 'Bearer' + accessToken
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
                header: {
                    Authorization: 'Bearer' + accessToken
                }
            })
                .then((res) => {
                    console.log(res.data)
                    dispatch(actSubmitCourseSuccess(res.data))
                })
                .catch((err) => {

                    dispatch(actSubmitCourseFailed(err))
                })
        }
    }
}
const actSubmitCourseRequest = () => {
    return {
        type: ActionType.NEW_COURSE_REQUEST
    }
}
const actSubmitCourseSuccess = (data) => {
    return {
        type: ActionType.NEW_COURSE_SUCCESS,
        payload: data
    }
}
const actSubmitCourseFailed = (err) => {
  return {
      type: ActionType.NEW_COURSE_FAILED,
      payload: err
  }
}