import * as ActionType from "./constants";
import axios from "axios";

export const actFetchCategoryList = () => {
  return (dispatch) => {
    dispatch(actCategoryListRequest());
    axios({
      url: `${process.env.REACT_APP_API_URL}/categories.json`,
      method: "GET",
    })
      .then((result) => {
        console.log('result', result.data)
        dispatch(actCategoryListSuccess(result.data));
      })
      .catch((error) => {
        console.log('error', error)
        dispatch(actCategoryListFailed(error));
        // console.log(maNhom)
      });
  };
};

const actCategoryListRequest = () => {
  return {
    type: ActionType.CATEGORY_LIST_REQUEST,
  };
};

const actCategoryListSuccess = (data) => {
  return {
    type: ActionType.CATEGORY_LIST_SUCCESS,
    payload: data,
  };
};

const actCategoryListFailed = (error) => {
  return {
    type: ActionType.CATEGORY_LIST_FAILED,
    payload: error,
  };
};
