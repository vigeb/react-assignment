import axios from 'Axios'
import * as ActionType from './constants'

export const actFetchCourseDetail = () => {
    return (dispatch) => {
        dispatch(actCourseDetailRequest())
        axios({
            url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=Angular",
            method: "GET"
        }).then((res) => {
            dispatch(actCourseDetailSuccess(res.data))
        }).catch((err) => {
            dispatch(actCourseDetailFailed(err))
        })
    }
}

const actCourseDetailRequest = () => {
    return {
        type: ActionType.COURSE_DETAIL_REQUEST
    }
}
const actCourseDetailSuccess = (data) => {
    return {
        type: ActionType.COURSE_DETAIL_SUCCESS,
        payload: data
    }
}
const actCourseDetailFailed = (err) => {
    return {
        type: ActionType.COURSE_DETAIL_FAILED,
        payload: err
    }
}