import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

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

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.title}>{props.course.tenKhoaHoc}</Typography>
      <Button component={Link} to={`/admin/update-course/${props.course.biDanh}`} variant="contained" color="primary" className={classes.button}>
        Update
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Delete
      </Button>
    </div>
  )
}

export default CourseManageItem;