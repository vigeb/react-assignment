import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'

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

const UserManageItem = (props) => {
  const classes = useStyles()
  const { enrollment } = props
  console.log(enrollment)
  const handleApprove = () => {
    enrollment.status = "approved"
    console.log(enrollment.status)

  }
  return (
    <div className={classes.root}>
      <Typography className={classes.title} component="h2" variant="h5">{`${enrollment.displayName} - ${enrollment.uid}`}</Typography>
      <Typography className={classes.title} component="h3" variant="h6">{enrollment.price} - {enrollment.courseName}</Typography>
      <Typography className={classes.title} component="p" variant="h6">Status: {enrollment.status}</Typography>
      <Button variant="contained" color="primary" className={classes.button} onClick={handleApprove}>
        Approve
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Pending
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Cancel
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Decline
      </Button>
    </div>
  )
}

export default UserManageItem