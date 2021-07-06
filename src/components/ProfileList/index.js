import UserManageItem from '../UserManageItem';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Button, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import ProfileCourseItem from '../ProfileCourseItem';


const useStyles = makeStyles((theme) => ({
    spacingContainer: {
        padding: theme.spacing(3),
    },
    spacingRight: {

    },
    navLinkActive: {
        marginRight: theme.spacing(2),
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
    const { profile } = props
    console.log(profile)
    const classes = useStyles()
    const { loading, setLoading } = props
    console.log(setLoading)
    const [data, setData] = useState('')
    const [changeStatus, setChangeStatus] = useState('pending')
    const renderCourseList = (list) => {
        if (loading) return <div>loading...</div>
        if (list.length) {
            return list.map((course) => (
                <>
                    {course.status === changeStatus ?
                        <Grid item key={course.id} xs={12}>
                            <ProfileCourseItem course={course} setData={setData} />
                        </Grid>
                        : null
                    }
                </>

            )
            )
        } else return (
            <Typography>No Data</Typography>
        )

    }
    const handleOnclick = (status) => {
        setChangeStatus(status)
    }
    return (
        <>
            <div className={classes.spacingContainer}>
                <Typography align="center" variant="h3" className={classes.title}>Các khóa học của tôi</Typography>
                <Button variant="contained" className={classes.navLinkActive} onClick={() => { handleOnclick("pending") }}>
                    Pending
                </Button>
                <Button variant="contained" className={classes.navLinkActive} onClick={() => { handleOnclick('approved') }}>
                    Approved
                </Button>
                <Button variant="contained" className={classes.navLinkActive} onClick={() => { handleOnclick('cancelled') }}>
                    Canceled
                </Button>
                <Button variant="contained" className={classes.navLinkActive} onClick={() => { handleOnclick('declined') }}>
                    Declined
                </Button>
            </div>
            <Grid container spacing={3} className={classes.spacingContainer}>
                {renderCourseList(profile)}
            </Grid>
        </>
    )
}
export default ProfileList