import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import axios from 'axios'
import { exchangeRefreshToken } from '../../global/authModule'
import { useState } from 'react'


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
  const [activeStatus, setActiveStatus] = useState(enrollment.status)

  const handleChangeStatus = (status) => {

    const credentials = localStorage.getItem("credentials") && JSON.parse(localStorage.getItem("credentials"))

    if (!credentials.refreshToken) return

    exchangeRefreshToken(credentials.refreshToken)

      .then((tokenData) => {
        const idToken = tokenData.data.id_token
        return axios({
          url: `${process.env.REACT_APP_API_URL}/enrollment/${enrollment.id}.json?auth=${idToken}`,
          method: 'PATCH',
          data: {
            status,
          }
        })
      })

      .then((res) => {
        setActiveStatus(status)
      })
      .catch((err) => {
      })
  }
  return (
    <div className={classes.root}>
      <Typography className={classes.title} component="h2" variant="h5">Name: {`${enrollment.displayName}`}
      </Typography>
      <Typography className={classes.title} component="h3" variant="h6">{enrollment.courseName}</Typography>
      <Typography className={classes.title} component="h3" variant="h6">Price: {enrollment.price}</Typography>
      <Typography className={classes.title} component="p" variant="h6">Status: {activeStatus}</Typography>
      <Button variant="contained" color="primary" className={classes.button} onClick={() => handleChangeStatus("approved")}>
        Approve
      </Button>
      <Button variant="contained" color="primary" className={classes.button} onClick={() => handleChangeStatus("pending")}>
        Pending
      </Button>
      <Button variant="contained" color="secondary" className={classes.button} onClick={() => handleChangeStatus("cancelled")}>
        Cancel
      </Button>
      <Button variant="contained" color="secondary" className={classes.button} onClick={() => handleChangeStatus("declined")}>
        Decline
      </Button>
    </div>
  )
}

export default UserManageItem