import { Container, Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import CourseListItem from './../CourseListItem/index'
import Axios from 'axios'
import { connect } from 'react-redux'
function CourseList() {
    useEffect(() => {
        Axios({
            method: 'GET',
            url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01',
        }).then((res) => {
            console.log(res.data)
            this.props.dispatch({
                type: "FETCH_COURSES",
                payload: res.data
            })
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <Container fixed>
            <h1>Danh sách khóa học</h1>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={3}>
                    <CourseListItem />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <CourseListItem />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <CourseListItem />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <CourseListItem />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <CourseListItem />
                </Grid>
            </Grid>
        </Container>
    )

}

// const mapStateToProps = (state) => {
//     const courseList: state.courses.courses
// }
export default connect()(CourseList)
