import StudentCourseItem from "../../../components/StudentCourseItem"
import { Grid, Typography } from "@material-ui/core"
import { useEffect } from "react"
import { connect } from 'react-redux'
import { actEnroll } from "../../../redux/modules/enrollment/action"

const CourseStudentPage = (props) => {
  useEffect(() => {
    props.fetchStudentsByCourseId('courseId', props.match.params.id)
  }, [])

  const renderStudentList = (lst) => {
    if (lst && lst.length) {
      return lst.map((item) => (
        <Grid item xs={12} key={item.id}>
          <StudentCourseItem data={item} />
        </Grid>
      ))
    }
    return <div>loading...</div>
  }

  return (
    <>
      <Typography component="h1" variant="h5">{props.data && props.data.length ? props.data[0].courseName : '' }</Typography>
      <Grid container spacing={3}>
        {renderStudentList(props.data)}
      </Grid>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudentsByCourseId: (key, val) => {
      dispatch(actEnroll(key, val))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.enrollReducer.loading,
    data: state.enrollReducer.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseStudentPage)