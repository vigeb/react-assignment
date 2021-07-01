import * as ActionType from "./constants";
import axios from "axios";

export const actFetchCourseList = (maNhom) => {
  return (dispatch) => {
    dispatch(actCourseListRequest());
    axios({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=` + maNhom,
      method: "GET",
    })
      .then((result) => {
        dispatch(actCourseListSuccess(result.data));
        console.log(maNhom, result.data)
      })
      .catch((error) => {
        dispatch(actCourseListFailed(error));
        console.log(maNhom)
      });
  };
};

const actCourseListRequest = () => {
  return {
    type: ActionType.COURSE_LIST_REQUEST,
  };
};

const actCourseListSuccess = (data) => {
  return {
    type: ActionType.COURSE_LIST_SUCCESS,
    payload: data,
  };
};

const actCourseListFailed = (error) => {
  return {
    type: ActionType.COURSE_LIST_FAILED,
    payload: error,
  };
};
