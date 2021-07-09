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

const CategoryManageItem = (props) => {
  const classes = useStyles()
  const { category } = props

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.title}>{category.name}</Typography>
      <Button component={Link} to={`/admin/update-category/${category.id}`} variant="contained" color="primary" className={classes.button}>
        Update
      </Button>
    </div>
  )
}

export default CategoryManageItem;