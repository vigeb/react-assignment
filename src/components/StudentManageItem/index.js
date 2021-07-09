import { Typography } from "@material-ui/core"
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { FormHelperText } from '@material-ui/core';

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
const StudentManageItem = (props) => {
    const classes = useStyles()
    const { student } = props

    return (
        <div className={classes.root}>
            <Typography variant="h5" className={classes.title}>Name: {student.displayName}</Typography>
            <Typography variant="h6" className={classes.title}>Phone: {student.phoneNumber}</Typography>
            <Typography variant="h6" className={classes.title}>Type: {student.typeOfUser}</Typography>

            <Button component={Link} to={`/admin/update-user/${student.uid}`} variant="contained" color="primary" className={classes.button}>
                Update
            </Button>

            <FormHelperText>'..'</FormHelperText>
        </div>
    )
}
export default StudentManageItem