import { makeStyles } from '@material-ui/core/styles';
import CourseManageItem from "../../../components/CourseManageItem";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    textTransform: 'uppercase',
  },
}))



const CourseManagePage = () => {
  const classes = useStyles()

  const courseList = [{
    tenKhoaHoc: 'test',
    biDanh: 'h123',
  },
  {
    tenKhoaHoc: 'demo',
    biDanh: 'ghfhfj',
  },
]

  const renderCourseList = () => {
    return courseList.map((item) => {
      return (
        <Grid item xs={12}>
          <CourseManageItem course={item} />
        </Grid>
      )
    })
  }
  return (
    <>
      <Typography variant="h4" component="h2" className={classes.title}>Course Management</Typography>
      <Grid container spacing={2}>
        {renderCourseList()}
      </Grid>
    </>
  )
}

export default CourseManagePage;