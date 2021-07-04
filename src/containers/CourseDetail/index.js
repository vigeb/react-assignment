import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { actFetchCourseDetail } from './modules/action'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function CourseDetailPage(props) {
    useEffect(() => {
        props.fetchCourseDetail(props.match.params.courseId)
        console.log('course detail: ', props)
    }, [])
    return (
        <Container >
            <Box display="flex" >
                <div>
                    <h1>Tên hóa học: {props.data.courseName}</h1>
                    {/* <p>Bí danh: {props.data.biDanh}</p> */}
                    <p>Mô tả: {props.data.description}</p>
                    <p>Số lượng học viên: 0</p>
                    <p>Ngày tạo: {props.data.createdDate}</p>
                </div>
                <img src={props.data.imageCover}></img>
            </Box>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.courseDetailReducer.loading,
        data: state.courseDetailReducer.data
            ||
        {
            category: "",
            courseName: "",
            createdBy: "",
            createdDate: "",
            description: "",
            imageCover: "",
            price: "",
            ratings: 0,
            slug: "",
            uid: "",
            updatedDate: "",
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCourseDetail: (id) => {
            dispatch(actFetchCourseDetail(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailPage)