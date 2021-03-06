import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

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
    const { course, status } = props

    return (
        <div className={classes.root}>
            <Typography className={classes.title} component="h2" variant="h5">{`${course.courseName}`}</Typography>
            <Typography className={classes.title} component="h3" variant="h6">giá: {course.price} đồng</Typography>

            <Typography className={classes.title} component="h3" variant="h6">Status: {course.status}</Typography>
            {course.status === 'approved' ? <Link to="/video"><Button variant="contained" style={{ backgroundColor: '#303f9f', color: 'white' }}>Learn now</Button ></Link> : null}
        </div>
    )
}

export default ProfileCourseItem