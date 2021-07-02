import FormAddCourse from '../../../components/FormAddCourse'
import axios from 'axios'
import { useState } from 'react'
const UpdateCoursePage = (props) => {
  const { courseDetail, setCourseDetail } = useState({})
  console.log(props.match.params.id)
  axios({
    url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${props.match.params.id}`,
    method: "GET",

  }).then((res) => {
    console.log(res.data)
    setCourseDetail(res.data)
  })
    .catch(({ response }) => { console.log(response) })
  return (
    <>
      <FormAddCourse updateMode={true} maKhoaHoc={props.match.params.id} courseDetail={courseDetail} />
    </>
  )
}


export default UpdateCoursePage