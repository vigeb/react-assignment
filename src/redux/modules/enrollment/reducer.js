import * as ActionType from './constants'

let initialState = {
    loading: false,
    data: null,
    error: null
}

const enrollReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ENROLL_REQUEST:
            state.loading = true
            state.data = null
            state.error = null
            return { ...state }
        case ActionType.ENROLL_SUCCESS:
            state.loading = false
            state.data = action.payload
            state.error = null
            return { ...state }
        case ActionType.ENROLL_FAILED:
            state.loading = false
            state.data = null
            state.error = action.payload
            return { ...state }
        default:
            return { ...state }
    }
}
export default enrollReducer