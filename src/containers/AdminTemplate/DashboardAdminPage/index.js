import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  fastLink: {
    display: 'block',
  },
  fastButton: {
    width: '100%',
    padding: '1rem 1.5rem',
    textAlign: 'center',
    background: theme.palette.primary.dark,
    '&:hover': {
      background: theme.palette.primary.main,
    },
  },
}))

const DashboardAdminPage = () => {
  const classes = useStyles()

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Link to="/admin/new-course" className={classes.fastLink}>
            <Typography variant="h6" component="h2" className={classes.fastButton}>NEW COURSE</Typography>
          </Link>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Link to="/admin/new-category" className={classes.fastLink}>
            <Typography variant="h6" component="h2" className={classes.fastButton}>NEW CATEGORY</Typography>
          </Link>
        </Grid>
      </Grid>
    </>
  )
}

export default DashboardAdminPage