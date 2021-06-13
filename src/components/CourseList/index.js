import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CourseListItem from './../CourseListItem'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

}));

function CourseList(props) {
    const classes = useStyles();
    console.log(props.data)
    if (!props.loading && props.data) {
        return (
            <div div className={classes.root} >
                Danh sách khóa học

                <Grid container spacing={3}>
                    {props.data.map((item, index) => (
                        <Grid item xs={3}>
                            <CourseListItem item={item} index={index} />
                        </Grid>
                    ))}

                </Grid>
            </div >
        );
    } else return (<div class="loader"></div>)

}

export default CourseList