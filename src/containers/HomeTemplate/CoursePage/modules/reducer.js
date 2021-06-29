import * as ActionType from "./constants";

let initialState = {
  loading: false,
  data: null,
  error: null,
};

const courseDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.COURSE_DETAIL_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.COURSE_DETAIL_SUCCESS:
      console.log('course success', action.payload)
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.COURSE_DETAIL_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default courseDetailReducer;
