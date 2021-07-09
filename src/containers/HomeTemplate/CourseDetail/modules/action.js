import axios from "axios";
import * as ActionType from "./constants"

export const actFetchCourseDetail = (id) => {
    return (dispatch) => {
        dispatch(actCourseDetailRequest())
        console.log('pending get detail')
        axios({
            url: `https://react-asignment-default-rtdb.asia-southeast1.firebasedatabase.app/courses/${id}.json`,
            method: "GET",
        })
        .then((res) => {
            dispatch(actCourseDetailSuccess(res.data))
        })
        .catch((err) => {
            dispatch(actCourseDetailFailed(err))
        })
    }
}

const actCourseDetailRequest = () => {
    return {
        type: ActionType.COURSE_DETAIL_REQUEST,
    };
};
const actCourseDetailSuccess = (data) => {
    return {
        type: ActionType.COURSE_DETAIL_SUCCESS,
        payload: data,
    };
};
const actCourseDetailFailed = (err) => {
    return {
        type: ActionType.COURSE_DETAIL_FAILED,
        payload: err,
    };
};
