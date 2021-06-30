import * as ActionType from './constants'

const initialState = {
    loading: false,
    data: null,
    error: null
}

const submitCourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SUBMIT_COURSE_REQUEST:
            state.loading = true
            state.data = null
            state.error = null
            return { ...state };
        case ActionType.SUBMIT_COURSE_SUCCESS:
            state.loading = true
            state.data = action.payload
            state.error = null
            return { ...state };
        case ActionType.SUBMIT_COURSE_FAILED:
            state.loading = true
            state.data = null
            state.error = action.payload
            return { ...state };
        default:
            break;
    }
}
export default submitCourseReducer