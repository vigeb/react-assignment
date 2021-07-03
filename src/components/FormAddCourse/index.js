import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { actSubmitCourse } from './modules/action'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel';
import slugify from 'slugify'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '1rem',
  },
  formControl: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
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
}))

const AddNewCoursePage = (props) => {
  const classes = useStyles()
  const { updateMode, courseDetail, courseId } = props
  let today = new Date();
  let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
  const [course, setCourse] = useState({
    ...courseDetail || {
      slug: "",
      courseName: "",
      description: "",
      views: 0,
      ratings: 0,
      imageCover: "",
      createdDate: '',
      updatedDate: '',
      category: '',
      createdBy: ''
    }
  })

  const handleCourseName = (e) => {
    if (updateMode) {
      setCourse({
        ...course,
        courseName: e.target.value.trim(),
      })
    } else {
      const slug = slugify(e.target.value, {
        replacement: '-',
        remove: undefined,
        lower: false,
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

  const handleOnSubmit = (e) => {
    e.preventDefault()
    props.submitCourse(course, updateMode, courseId)
  }
  const maDanhMucKhoaHocArr = [
    // FrontEnd,
    'BackEnd', 'FullStack', 'DiDong'
  ]
  const maNhomArr = [
    'GP02', 'GP03', 'GP04', 'GP05', 'GP06', 'GP07', 'GP08', 'GP09', 'GP10',
  ];

  return (
    <div className={classes.root}>
      <Typography variant="h1" component="h1" className={classes.title}>{updateMode ? 'Update Course' : 'Add New Course'}</Typography>
      <form onSubmit={handleOnSubmit}>
        <FormControl className={classes.formControl}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="courseName"
            label="Tên Khóa Học"
            name="courseName"
            autoComplete="courseName"
            value={course.courseName}
            autoFocus
            onBlur={handleCourseName}
            onChange={handleCourseInfo}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="slug"
            label="Slug"
            name="slug"
            value={course.slug}
            autoComplete="slug"
            onChange={handleCourseInfo}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="imageCover"
            label="Link hình ảnh"
            name="imageCover"
            autoComplete="imageCover"
            value={course.imageCover}
            rows={6}
            onChange={handleCourseInfo}
          />
          <FormControl variant="outlined" fullWidth className={classes.formControl}>
            <InputLabel fullWidth id="demo-simple-select-outlined-label">Mã danh mục khóa học</InputLabel> <Select
              labelId="category"
              id="category"
              name="category"
              onChange={handleCourseInfo}
              label="Mã danh mục khóa học"
              value={course.category}
            >
              <MenuItem value="FrontEnd">FrontEnd</MenuItem>
              {maDanhMucKhoaHocArr.map((catogory) => (
                <MenuItem value={catogory}>{catogory}</MenuItem>
              ))}

            </Select> </FormControl>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="description"
            label="Mô Tả"
            name="description"
            autoComplete="description"
            value={course.description}
            multiline
            rows={6}
            onChange={handleCourseInfo}
          />
          {/* <FormControl variant="outlined" fullWidth className={classes.formControl}>
            <InputLabel fullWidth id="demo-simple-select-outlined-label">Mã nhóm</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"

              label="Mã nhóm"
              onChange={handleCourseInfo}
              name="maNhom"
              defaultValue="GP01"
              value={course.maNhom}
            >
              <MenuItem key="GP01"
                value="GP01"
                onChange={handleCourseInfo}
              >GP01</MenuItem>
              {maNhomArr.map((maNhom) => (
                <MenuItem key={maNhom}
                  value={maNhom}
                  onChange={handleCourseInfo}
                >{maNhom}</MenuItem>
              ))}

            </Select>
          </FormControl> */}

          <Button className={classes.buttonSubmit} size="large" variant="contained" color="primary" type="submit">
            {updateMode ? 'UPDATE' : 'PUBLISH'}
          </Button>
        </FormControl>
      </form>
    </div>
  )
}

const setDispatchToProps = (dispatch) => {
  return {
    submitCourse: (course, updateMode) => {
      dispatch(actSubmitCourse(course, updateMode))
    }
  }
}

export default connect(null, setDispatchToProps)(AddNewCoursePage);