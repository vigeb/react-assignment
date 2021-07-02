import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actDeleteCourse } from './modules/action';
import { FormHelperText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '1rem 1.5rem',
    background: theme.palette.grey['400'],
    borderRadius: '1rem',
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginRight: theme.spacing(2),
  },
}))

const CourseManageItem = (props) => {
  const classes = useStyles()
  const { deleteCourse, course, err } = props
  const handleOnClick = () => {
    deleteCourse(course.maKhoaHoc)
  }

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.title}>{course.tenKhoaHoc}</Typography>
      <Button component={Link} to={`/admin/update-course/${course.maKhoaHoc}`} variant="contained" color="primary" className={classes.button}>
        Update
      </Button>
      <Button onClick={handleOnClick} variant="contained" color="secondary" className={classes.button}>
        Delete
      </Button>
      <FormHelperText>{err}</FormHelperText>
    </div>
  )
}

const mapDisPatchToProps = (dispatch) => {
  return {
    deleteCourse: (maKhoaHoc) => {
      dispatch(actDeleteCourse(maKhoaHoc))
    }
  }
}
const mapStateToProps = (state) => {
  return {
    err: state.courseDeleteReducer.error
  }
}

export default connect(mapStateToProps, mapDisPatchToProps)(CourseManageItem);