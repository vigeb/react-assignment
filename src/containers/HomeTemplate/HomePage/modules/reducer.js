import * as ActionType from "./constants";

let initialState = {
  loading: false,
  data: null,
  error: null,
};

const courseListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.COURSE_LIST_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.COURSE_LIST_SUCCESS:
      console.log(action.payload)
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.COURSE_LIST_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default courseListReducer;
