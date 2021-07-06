import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[400],
    borderRadius: '0.75rem',
    padding: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(2)
  },
}))

const StudentCourseItem = (props) => {
  const classes = useStyles()
  const { data } = props
  return (
    <div className={classes.root}>
      <Typography component="h2" variant="h6" className={classes.title}>
        {data.displayName}
      </Typography>
      <Typography component="p" className={classes.title}>
        UID: {data.uid}
      </Typography>
      <Button variant="contained" color="primary">View detail</Button>
    </div>
  )
}

export default StudentCourseItem