import { makeStyles } from '@material-ui/core/styles'
import { Grid, Button, Typography, Container } from '@material-ui/core';
import { NavLink } from 'react-router-dom'
import ProfileCourseItem from '../ProfileCourseItem';
import Loading from '../Loading';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        boxSizing: 'border-box',
        padding: theme.spacing(3),
    },
    spacingRight: {
        marginRight: theme.spacing(2),
    },
    navLinkActive: {
        '& button': {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.primary.contrastText,
            '&:hover': {
                backgroundColor: theme.palette.primary.main,
            },
        },
    },
    title: {
        display: 'block',
        marginBottom: '1.5rem'
    }
}))

function ProfileList(props) {
    const classes = useStyles()
    const { loading, data, status, uid } = props

    const renderCourseList = (list) => {
        if (loading) return <Container ><Loading /></Container>
        if (!list || !list.length) return <Typography>There is nothing here...</Typography>

        let hasData = false
        const coursesToRender = list.map((course) => {
            if (course.status === status) {
                hasData = true
                return (
                    <Grid item key={course.id} xs={12}>
                        <ProfileCourseItem course={course} status={status} />
                    </Grid>
                )
            }
        }
        )

        if (hasData) return coursesToRender
        return <Typography>There is nothing here...</Typography>

    }

    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={12}>
                <Typography align="center" variant="h3" className={classes.title}>Các khóa học của tôi</Typography>
                <NavLink to={`/profile/${uid}/pending`} activeClassName={classes.navLinkActive}>
                    <Button variant="contained" className={classes.spacingRight}>
                        Orders
                    </Button>
                </NavLink>
                <NavLink to={`/profile/${uid}/approved`} activeClassName={classes.navLinkActive}>
                    <Button variant="contained" className={classes.spacingRight}>
                        Your courses
                    </Button>
                </NavLink>
                <NavLink to={`/profile/${uid}/cancelled`} activeClassName={classes.navLinkActive}>
                    <Button variant="contained" className={classes.spacingRight}>
                        Cancelled orders
                    </Button>
                </NavLink>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    {renderCourseList(data)}
                </Grid>
            </Grid>
        </Grid>
    )
}
export default ProfileList