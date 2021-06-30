import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
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

  const [course, setCourse] = useState({ ...props.course || {
    biDanh: '',
    tenKhoaHoc: '',
    moTa: '',
  }})

  const handleCourseName = (e) => {
    if (props.updateMode) {
      setCourse({
        ...course,
        tenKhoaHoc: e.target.value.trim(),
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
        tenKhoaHoc: e.target.value.trim(),
        biDanh: slug,
      })
    }
  }

  const handleCourseInfo = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className={classes.root}>
      <Typography variant="h1" component="h1" className={classes.title}>{props.updateMode ? 'Update Course' : 'Add New Course'}</Typography>
      <FormControl className={classes.formControl}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="tenKhoaHoc"
          label="Tên Khóa Học"
          name="tenKhoaHoc"
          autoComplete="tenKhoaHoc"
          value={course.tenKhoaHoc}
          autoFocus
          onBlur={handleCourseName}
          onChange={handleCourseInfo}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="biDanh"
          label="Bí Danh (slug)"
          name="biDanh"
          value={course.biDanh}
          autoComplete="biDanh"
          onChange={handleCourseInfo}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="maKhoaHoc"
          label="Mã Khóa Học"
          name="maKhoaHoc"
          value={course.maKhoaHoc}
          autoComplete="maKhoaHoc"
          onChange={handleCourseInfo}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="moTa"
          label="Mô Tả"
          name="moTa"
          autoComplete="moTa"
          value={course.moTa}
          multiline
          rows={6}
          onChange={handleCourseInfo}
        />
        <Select
          labelId="danhMucKhoaHoc"
          id="danhMucKhoaHoc"
        >
          <MenuItem value={10}>Backend</MenuItem>
          <MenuItem value={20}>Frontend</MenuItem>
          <MenuItem value={30}>Fullstack</MenuItem>
        </Select>
        <FormHelperText>Hãy chọn danh mục khóa học</FormHelperText>
        <Button className={classes.buttonSubmit} size="large" variant="contained" color="primary" type="submit">
        {props.updateMode ? 'UPDATE' : 'PUBLISH'}
        </Button>
      </FormControl>
    </div>
  )
}

export default AddNewCoursePage;