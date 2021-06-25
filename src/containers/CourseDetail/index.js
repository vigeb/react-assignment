import React from 'react'
import { Axios } from 'axios'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { actFetchCourseDetail } from './modules/action'

function CourseDetailPage() {
    // useEffect()
    return (
        <div>
            this is CourseDetailPage
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.courseDetailReducer.loading,
        data: state.courseDetailReducer.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCourseDetail: () => {
            dispatch(actFetchCourseDetail())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailPage)