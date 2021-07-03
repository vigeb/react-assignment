import { useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
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
  const [responseText, setResponseText] = useState('')
  const { course } = props
  const handleDeleteCourse = () => {
    let credentials = localStorage.getItem("credentials") && JSON.parse(localStorage.getItem("credentials"))

    if (credentials && credentials.accessToken && credentials.maLoaiNguoiDung === 'GV') {
      axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${course.maKhoaHoc}`,
        method: "DELETE",
        headers: {
          Authorization: 'Bearer ' + credentials.accessToken
        }
      })
        .then((res) => {
          console.log('res', res)
          setResponseText('Xoa thanh cong')
        })
        .catch(({ response }) => {
          setResponseText(response.data || 'xoa that bai')
        })
    }
    // return (dispatch) => {
    //     dispatch(actDeleteCourseRequest());
    //     console.log('pending delete')
    //     axios({
    //         url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${}`,
    //         method: "DELETE",
    //         headers: {
    //             Authorization: 'Bearer ' + accessToken
    //         }
    //     })
    //         .then((res) => {
    //             dispatch(actDeleteCourseSuccess(res.data));
    //             console.log('delete data success', res.data)
    //         })
    //         .catch(({ response } = {}) => {

    //             dispatch(actDeleteCourseFailed(response.data));

    //         });
    // };
  }

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.title}>{course.tenKhoaHoc}</Typography>
      <Button component={Link} to={`/admin/update-course/${course.maKhoaHoc}`} variant="contained" color="primary" className={classes.button}>
        Update
      </Button>
      <Button onClick={handleDeleteCourse} variant="contained" color="secondary" className={classes.button}>
        Delete
      </Button>
      <FormHelperText>{responseText}</FormHelperText>
    </div>
  )
}

export default CourseManageItem;