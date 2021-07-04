import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CourseListItem from './../CourseListItem'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom'

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

    return (
        <div className={classes.root} >
            <Box p={3}><Typography align="center" variant="h2" display="block" >Danh sách khóa học</Typography></Box>
            <Grid container spacing={3}>
                {props.data.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                        <Link to={`/detail/${item.slug}.${item.id}`}>
                            <CourseListItem item={item} />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div >
    )
}

export default CourseList