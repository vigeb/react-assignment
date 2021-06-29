import * as ActionType from "./constants";
import axios from "axios";

export const actFetchCourseDetail = (id) => {
  return (dispatch) => {
    dispatch(actCourseDetailRequest());
    axios({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?MaNhom=GP01&maKhoaHoc=${id}`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actCourseDetailSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actCourseDetailFailed(error));
      });
  };
};

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

const actCourseDetailFailed = (error) => {
  return {
    type: ActionType.COURSE_DETAIL_FAILED,
    payload: error,
  };
};
