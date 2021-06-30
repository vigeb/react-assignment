import React, { useState } from "react";
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
import { connect } from 'react-redux'
import { actSubmitCourse } from "./modules/action";

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
  let today = new Date();
  let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
  const [course, setCourse] = useState({
    ...props.course || {
      "maKhoaHoc": "",
      "biDanh": "",
      "tenKhoaHoc": "",
      "moTa": "",
      "luotXem": 0,
      "danhGia": 0,
      "hinhAnh": "",
      "maNhom": "",
      "ngayTao": date,
      "maDanhMucKhoaHoc": "",
      "taiKhoanNguoiTao": JSON.parse(localStorage.getItem("credentials")).taiKhoan
    }
  })

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

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log('submited')
    props.submitCourse(course, props.updateMode)
  }
  const maDanhMucKhoaHocArr = [
    // FrontEnd,
    'BackEnd', 'FullStack', 'DiDong'
  ]
  const maNhomArr = [
    'GP02', 'GP03', 'GP04', 'GP05', 'GP06', 'GP07', 'GP08', 'GP09', 'GP10',
  ];
  console.log(course)
  return (
    <div className={classes.root}>
      <Typography variant="h1" component="h1" className={classes.title}>{props.updateMode ? 'Update Course' : 'Add New Course'}</Typography>
      <form onSubmit={handleOnSubmit}>
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
            autoFocus
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
            autoFocus
            onChange={handleCourseInfo}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="hinhAnh"
            label="Link hình ảnh"
            name="hinhAnh"
            autoComplete="hinhAnh"
            autoFocus
            value={course.hinhAnh}

            rows={6}
            onChange={handleCourseInfo}
          />
          <FormControl variant="outlined" fullWidth className={classes.formControl}>
            <InputLabel fullWidth id="demo-simple-select-outlined-label">Mã danh mục khóa học</InputLabel> <Select
              labelId="maDanhMucKhoaHoc"
              id="maDanhMucKhoaHoc"
              name="maDanhMucKhoaHoc"
              onChange={handleCourseInfo}
              label="Mã danh mục khóa học"
            >
              <MenuItem value="FrontEnd">FrontEnd</MenuItem>
              {maDanhMucKhoaHocArr.map((maDanhMucKhoaHoc) => (
                <MenuItem value={maDanhMucKhoaHoc}>{maDanhMucKhoaHoc}</MenuItem>
              ))}

            </Select> </FormControl>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="moTa"
            label="Mô Tả"
            name="moTa"
            autoComplete="moTa"
            autoFocus
            value={course.moTa}
            multiline
            rows={6}
            onChange={handleCourseInfo}
          />
          <FormControl variant="outlined" fullWidth className={classes.formControl}>
            <InputLabel fullWidth id="demo-simple-select-outlined-label">Mã nhóm</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"

              label="Mã nhóm"
              onChange={handleCourseInfo}
              name="maNhom"
              defaultValue="GP01"
            // value={taiKhoan.maNhom}
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
          </FormControl>
          <Button className={classes.buttonSubmit} size="large" variant="contained" color="primary" type="submit">
            {props.updateMode ? 'UPDATE' : 'PUBLISH'}
          </Button>

        </FormControl>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitCourse: (course, updateMode) => {
      dispatch(actSubmitCourse(course, updateMode))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddNewCoursePage);