import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CourseListItem from './../CourseListItem'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
                <Box p={3}><Typography align="center" variant="h2" display="block" >Danh sách khóa học</Typography></Box>

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