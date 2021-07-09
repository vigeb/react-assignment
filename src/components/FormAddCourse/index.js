import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { FormHelperText, InputLabel, Typography, Button, Select, FormControl, MenuItem, TextField } from "@material-ui/core";
import slugify from 'slugify'
import axios from "axios";
import { exchangeRefreshToken } from '../../global/authModule'
import { useHistory } from 'react-router-dom'
import validation from './validation'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '1rem',
  },
  formControl: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '1rem',
    marginBottom: '0.5rem'
  },
  buttonSubmit: {
    marginTop: '1.5rem',
  },
  title: {
    fontSize: '2rem',
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: '2rem',
  },
  errorMsg: {
    color: theme.palette.error.dark,
  },
}))

const AddNewCoursePage = (props) => {
  const classes = useStyles()
  const { updateMode, courseDetail, courseId } = props
  const [course, setCourse] = useState({ ...courseDetail })

  const [categList, setCategList] = useState([
    {
      id: '',
      name: 'loading...',
    }
  ])

  const [loading, setLoading] = useState(false)

  const [errors, setErrors] = useState({})

  const history = useHistory()

  useEffect(() => {
    axios({
      url: `${process.env.REACT_APP_API_URL}/categories.json`,
      method: 'GET',
    })
      .then((res) => {
        let categoryList = []
        for (let key in res.data) {
          categoryList.push({
            ...res.data[key],
            id: key,
          })
        }
        return setCategList(categoryList)
      })
      .catch((err) => {
        console.log('err', err)
      })
  }, [])

  const handleCourseName = (e) => {
    if (updateMode) {
      setCourse({
        ...course,
        courseName: e.target.value.trim(),
      })
    } else {
      const slug = slugify(e.target.value, {
        replacement: '-',
        remove: /[*+~.()'"!:@?=/;]/g,
        lower: true,
        strict: false,
        locale: 'vi'
      })

      setCourse({
        ...course,
        courseName: e.target.value.trim(),
        slug,
      })
    }
  }

  const handleCourseInfo = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    })
  }

  const addCourse = (idToken, { date, uid }) => {
    return axios({
      url: `https://react-asignment-default-rtdb.asia-southeast1.firebasedatabase.app/courses.json?auth=${idToken}`,
      method: 'POST',
      data: {
        ...course,
        createdDate: date,
        uid,
      },
    })
  }

  const updateCourse = (idToken, { date, uid }) => {
    return axios({
      url: `https://react-asignment-default-rtdb.asia-southeast1.firebasedatabase.app/courses/${courseId}.json?auth=${idToken}`,
      method: 'PUT',
      data: {
        ...course,
        updatedDate: date,
        uid,
      },
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const errs = validation(course)
    console.log('errs', errs)
    setErrors(errs)
    // props.submitCourse(course, updateMode, courseId)
    if (Object.values(errs).length === 0) {
      setLoading(true)
      const credentials = localStorage.getItem("credentials") && JSON.parse(localStorage.getItem("credentials"))

      if (!credentials.refreshToken) return

      exchangeRefreshToken(credentials.refreshToken)
        .then((tokenData) => {
          const idToken = tokenData.data.id_token
          const uid = tokenData.data.user_id

          let today = new Date();
          let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

          const extraCourseInfo = { date, uid, }
          console.log('course', course)
          if (updateMode) {
            return updateCourse(idToken, extraCourseInfo)
          } else {
            return addCourse(idToken, extraCourseInfo)
          }
        })
        .then((res) => {
          console.log('success', res.data)
          history.push('/admin/course-management')
        })
        .catch((err) => {
          setLoading(false)
          console.log('form add course err', err)
        })
    }
  }

  return (
    <div className={classes.root}>
      <Typography variant="h1" component="h1" className={classes.title}>{updateMode ? 'Update Course' : 'Add New Course'}</Typography>
      <form onSubmit={handleOnSubmit}>
        <FormControl className={classes.formControl}>
          <TextField
            error={Boolean(errors.courseName)}
            helperText={errors.courseName}
            variant="outlined"
            margin="normal"
            id="courseName"
            label="Tên Khóa Học"
            name="courseName"
            autoComplete="courseName"
            value={course.courseName}
            autoFocus
            onBlur={handleCourseName}
            onChange={handleCourseInfo}
          />
          {/* <FormHelperText className={classes.errorMsg}>{errors.courseName}</FormHelperText> */}
          <TextField
            error={Boolean(errors.slug)}
            helperText={errors.slug}
            variant="outlined"
            margin="normal"
            id="slug"
            label="Slug"
            name="slug"
            value={course.slug}
            autoComplete="slug"
            onChange={handleCourseInfo}
          />
          <TextField
            error={Boolean(errors.imageCover)}
            helperText={errors.imageCover}
            variant="outlined"
            margin="normal"
            id="imageCover"
            label="Link hình ảnh"
            name="imageCover"
            autoComplete="imageCover"
            value={course.imageCover}
            rows={6}
            onChange={handleCourseInfo}
          />
          <TextField
            error={Boolean(errors.price)}
            helperText={errors.price}
            variant="outlined"
            margin="normal"
            id="price"
            label="Price"
            name="price"
            autoComplete="price"
            value={course.price}
            rows={6}
            onChange={handleCourseInfo}
          />
          <FormControl variant="outlined" className={classes.formControl} error={errors.category}>
            <InputLabel id="demo-simple-select-outlined-label">Danh mục khóa học</InputLabel>
            <Select
              labelId="category"
              id="category"
              name="category"
              onChange={handleCourseInfo}
              label="Danh mục khóa học"
              value={course.category}
            >
              <MenuItem value="">Select</MenuItem>
              {categList.map((item) => (
                <MenuItem value={item.id} key={item.id}>
                  {item.name}
                </MenuItem>
              ))}

            </Select>
          </FormControl>

          <TextField
            error={Boolean(errors.description)}
            helperText={errors.description}
            variant="outlined"
            margin="normal"
            id="description"
            label="Mô Tả"
            name="description"
            autoComplete="description"
            value={course.description}
            multiline
            rows={6}
            onChange={handleCourseInfo}
          />

          <Button className={classes.buttonSubmit} size="large" variant="contained" color="primary" type="submit" disabled={loading}>
            {updateMode ? 'UPDATE' : 'PUBLISH'}
          </Button>
        </FormControl>
      </form>
    </div>
  )
}

export default AddNewCoursePage;