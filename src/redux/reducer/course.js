let initialState = {
    courses: []
}
const CourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_COURSES':
            state.courses = action.payload
            return { ...state }
        default:
            return state
    }
}
export default CourseReducer