import { makeStyles } from '@material-ui/core/styles';
import CourseManageItem from "../../../components/CourseManageItem";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import Loading from '../../../components/Loading';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    textTransform: 'uppercase',
  },
  buttonCreate: {
    marginBottom: theme.spacing(2),
  },
}))



const CourseManagePage = (props) => {
  const classes = useStyles()
  const [courseList, setCourseList] = useState([])

  useEffect(() => {
    return axios({
      url: `${process.env.REACT_APP_API_URL}/courses.json`,
      method: 'GET',
    })
      .then((res) => {
        let courses = []
        for (let key in res.data) {
          courses.unshift({
            ...res.data[key],
            id: key,
          })
        }
        setCourseList(courses)
      })
      .catch((err) => {
        console.log('err', err)
      })
  }, [])

  const renderCourseList = (courses) => {
    if (courses && courses.length) {
      return courses.map((item) => {
        return (
          <Grid item xs={12} key={item.id}>
            <CourseManageItem course={item} courseId={item.id} />
          </Grid>
        )
      })
    } else {
      return <Container><Loading /></Container>
    }
  }

  return (
    <>
      <Typography variant="h4" component="h2" className={classes.title}>Course Management</Typography>
      <div className={classes.buttonCreate}>
        <Link to="/admin/new-course">
          <Button variant="contained" color="primary">NEW COURSE</Button>
        </Link>
      </div>
      <Grid container spacing={2}>
        {renderCourseList(courseList)}
      </Grid>
    </>
  )
}

export default CourseManagePage