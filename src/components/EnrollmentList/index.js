import UserManageItem from '../UserManageItem';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Button, Container, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import Loading from '../Loading';


const useStyles = makeStyles((theme) => ({
  spacingBottom: {
    marginBottom: theme.spacing(3),
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
}))

const EnrollmentList = (props) => {
  const classes = useStyles()
  const { enrollList, loading, setLoading } = props
  console.log(enrollList)
  const [data, setData] = useState('')
  const renderEnrollList = (lst) => {
    if (loading) return <Container><Loading /></Container>
    if (lst && lst.length) {
      return lst.map((enroll) => (
        <Grid item key={enroll.id} xs={12}>
          <UserManageItem enrollment={enroll} setData={setData} />
        </Grid>
      )
      )
    }
    return <Typography>There is nothing here...</Typography>
  }

  return (
    <>
      <div className={classes.spacingBottom}>
        <NavLink to="/admin/enrollment/pending" activeClassName={classes.navLinkActive}>
          <Button variant="contained" className={classes.spacingRight} >
            Pending
          </Button>
        </NavLink>
        <NavLink to="/admin/enrollment/approved" activeClassName={classes.navLinkActive}>
          <Button variant="contained" className={classes.spacingRight} >
            Approved
          </Button>
        </NavLink>
        <NavLink to="/admin/enrollment/cancelled" activeClassName={classes.navLinkActive}>
          <Button variant="contained" className={classes.spacingRight} >
            Canceled
          </Button>
        </NavLink>
        <NavLink to="/admin/enrollment/declined" activeClassName={classes.navLinkActive}>
          <Button variant="contained" className={classes.spacingRight} >
            Declined
          </Button>
        </NavLink>
      </div>
      <Grid container spacing={3}>
        {renderEnrollList(enrollList)}
      </Grid>
    </>
  )
}

export default EnrollmentList