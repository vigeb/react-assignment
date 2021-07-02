import axios from "axios";
import * as ActionType from "./constants";

export const actDeleteCourse = (id) => {
    let accessToken = ''
    if (localStorage.getItem("credentials")) {
        accessToken = JSON.parse(localStorage.getItem("credentials")).accessToken
    }
    return (dispatch) => {
        dispatch(actDeleteCourseRequest());
        console.log('pending delete')
        axios({
            url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${id}`,
            method: "DELETE",
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        })
            .then((res) => {
                dispatch(actDeleteCourseSuccess(res.data));
                console.log('delete data success', res.data)
            })
            .catch(({ response } = {}) => {

                dispatch(actDeleteCourseFailed(response.data));

            });
    };
};

const actDeleteCourseRequest = () => {
    return {
        type: ActionType.COURSE_DELETE_REQUEST,
    };
};
const actDeleteCourseSuccess = (data) => {
    return {
        type: ActionType.COURSE_DELETE_SUCCESS,
        payload: data,
    };
};
const actDeleteCourseFailed = (err) => {

    return {
        type: ActionType.COURSE_DELETE_FAILED,
        payload: err,
    };
};
