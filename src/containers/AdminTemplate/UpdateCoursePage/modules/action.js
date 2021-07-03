import * as ActionType from './constants'
import axios from 'axios'

export const actFetchUpdatedCourse = (id) => {
    return (dispatch) => {
      dispatch(actFetchCourseRequest());
      axios({
          url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
          method: "GET",
      })
          .then((res) => {
              dispatch(actFetchCourseSuccess(res.data));
              console.log('get data success', res.data)
          })
          .catch((err) => {
              dispatch(actFetchCourseFailed(err));
          });
    }
}
const actFetchCourseRequest = () => {
    return {
        type: ActionType.UPDATED_COURSE_REQUEST
    }
}
const actFetchCourseSuccess = (data) => {
    return {
        type: ActionType.UPDATED_COURSE_SUCCESS,
        payload: data
    }
}
const actFetchCourseFailed = (err) => {
    return {
        type: ActionType.UPDATED_COURSE_FAILED,
        payload: err
    }
}