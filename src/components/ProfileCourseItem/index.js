import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import axios from 'axios'
import { exchangeRefreshToken } from '../../global/authModule'
import { useState } from 'react'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: theme.spacing(3),
        backgroundColor: theme.palette.grey[200],
        borderRadius: '.75rem',
    },
    title: {
        marginBottom: theme.spacing(2),
    },
    button: {
        marginRight: theme.spacing(2),
    },
}))

const ProfileCourseItem = (props) => {
    const classes = useStyles()
    const { course } = props

    return (
        <div className={classes.root}>
            <Typography className={classes.title} component="h2" variant="h5">{`${course.courseName} - ${course.courseName}`}</Typography>
            <Typography className={classes.title} component="h3" variant="h6">giá: {course.price} đồng</Typography>

            <Typography className={classes.title} component="h3" variant="h6">Status: {course.status}</Typography>

        </div>
    )
}

export default ProfileCourseItem