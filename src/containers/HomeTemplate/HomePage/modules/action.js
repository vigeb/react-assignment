import * as ActionType from "./constants";
import axios from "axios";

export const actFetchCourseList = () => {
  return (dispatch) => {
    dispatch(actCourseListRequest());
    axios({
      url: `${process.env.REACT_APP_API_URL}/courses.json`,
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
