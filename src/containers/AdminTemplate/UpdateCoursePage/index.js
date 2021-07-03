import { useEffect } from 'react'
import FormAddCourse from '../../../components/FormAddCourse'
import { connect } from 'react-redux'
import { actFetchUpdatedCourse } from './modules/action'

const UpdateCoursePage = (props) => {
  // const { course, setCourse } = useState(null)
  // console.log(props.match.params.id)
  
  useEffect(() => {
    console.log('id', props.match.params.id)
    props.fetchUpdatedCourse(props.match.params.id)
    // axios({
    //   url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${props.match.params.id}`,
    //   method: "GET",
  
    // }).then((res) => {
    //   console.log(res.data)
    //   setCourse(res.data)
    // })
    // .catch(({ response }) => { console.log(response) })
  }, [])

  const renderFormUpdate = () => {
    console.log('updated course', props.data)
    const course = props.data
    if (course) {
      return <FormAddCourse updateMode={true} maKhoaHoc={props.match.params.id} courseDetail={course} />
    } else {
      return <div>loading...</div>
    }
  }

  return (
    <>
      {renderFormUpdate()}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
      loading: state.updatedCourseReducer.loading,
      data: state.updatedCourseReducer.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUpdatedCourse: (id) => {
        dispatch(actFetchUpdatedCourse(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCoursePage)