import { FormControl, Grid, Typography } from "@material-ui/core"
import { useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
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
const StudentManageItem = (props) => {
    const classes = useStyles()
    const { student } = props
    const handleDeleteStudent = () => {
        let credentials = localStorage.getItem("credentials") && JSON.parse(localStorage.getItem("credentials"))
        if (credentials && credentials.idToken && credentials.typeOfUser === "GV") {
            axios({
                url: `https://react-asignment-default-rtdb.asia-southeast1.firebasedatabase.app/users/${student.id}.json?auth=${credentials.idToken}`,
                method: "DELETE"
            })
                .then(res => {
                    console.log(res)
                    alert('xóa thành công')
                })
                .catch(err => {
                    console.log(err)
                    alert('xóa fail')
                })

        }
    }
    return (
        <div className={classes.root}>
            <Typography variant="h5" className={classes.title}>Tên: {student.displayName}</Typography>
            <Typography variant="h6" className={classes.title}>Số điện thoại: {student.phoneNumber}</Typography>

            <Button component={Link} to={`/admin/update-course/${student.maKhoaHoc}`} variant="contained" color="primary" className={classes.button}>
                Update
            </Button>
            <Button onClick={handleDeleteStudent} variant="contained" color="secondary" className={classes.button}>
                Delete
            </Button>
            <FormHelperText>'..'</FormHelperText>
        </div>
    )
}
export default StudentManageItem