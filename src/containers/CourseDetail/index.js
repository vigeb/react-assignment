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
                    <h1>Mã hóa học: {props.data.maKhoaHoc}</h1>
                    <p>Bí danh: {props.data.biDanh}</p>
                    <p>Mô tả: {props.data.moTa}</p>
                    <p>Số lượng học viên: {props.data.soLuongHocVien}</p>
                    <p>Ngày tạo: {props.data.ngayTao}</p>
                </div>
                <img src={props.data.hinhAnh}></img>
            </Box>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.courseDetailReducer.loading,
        data: state.courseDetailReducer.data || {
            "maKhoaHoc": "",
            "biDanh": "",
            "tenKhoaHoc": "",
            "moTa": "",
            "luotXem": 0,
            "hinhAnh": "",
            "ngayTao": "",
            "soLuongHocVien": 0,
            "nguoiTao": {
                "taiKhoan": "",
                "hoTen": "",
                "maLoaiNguoiDung": "",
                "tenLoaiNguoiDung": ""
            },
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