import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { actFetchCourseDetail } from './modules/action'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CourseListItem from '../../components/CourseListItem'
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
    },
    title: {
        marginBottom: theme.spacing(3),
    },
    desc: {
        whiteSpace: 'pre-wrap',
        marginTop: theme.spacing(3),
    },
}))

function CourseDetailPage(props) {
    const classes = useStyles()

    useEffect(() => {
        const id = props.match.params.id.split('.')[1]
        props.fetchCourseDetail(id)
    }, [])

    const renderCourse = (data) => {
        if (data) {
            return (
                <Grid container spacing={3} >
                    <Grid item xs={12} sm={9} md={8} >
                        <Typography component="h1" variant="h4" className={classes.title}>
                            {props.data.courseName}
                        </Typography>
                        <Divider />
                        <Typography className={classes.desc} component="div">
                            {props.data.description}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} md={4}>
                        <CourseListItem item={props.data} inDetailPage={true} />
                    </Grid>
                </Grid>
            )
        } else {
            return <div>loading...</div>
        }
    }

    return (
        <Container className={classes.root}>
            {renderCourse(props.data)}
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.courseDetailReducer.loading,
        data: state.courseDetailReducer.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCourseDetail: (id) => {
            dispatch(actFetchCourseDetail(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailPage)