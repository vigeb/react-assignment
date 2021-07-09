import * as ActionType from './constants'

let initialState = {
    loading: false,
    data: null,
    error: null
}

const logInReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOG_IN_REQUEST:
            state.loading = true
            state.data = null
            state.error = null
            return { ...state }
        case ActionType.LOG_IN_SUCCESS:
            state.loading = false
            state.data = action.payload
            state.error = null
            return { ...state }
        case ActionType.LOG_IN_FAILED:
            state.loading = false
            state.data = null
            state.error = action.payload
            return { ...state }
        default:
            return { ...state }
    }
}
export default logInReducer