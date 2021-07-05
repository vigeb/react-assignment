import * as ActionType from "./constants";
import axios from "axios";

export const actFetchCourseList = () => {
  return (dispatch) => {
    dispatch(actCourseListRequest());
    axios({
      url: `https://react-asignment-default-rtdb.asia-southeast1.firebasedatabase.app/courses.json`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actCourseListSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actCourseListFailed(error));
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
