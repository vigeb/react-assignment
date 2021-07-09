import { Grid, Typography, Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import StudentManageItem from "../../../components/StudentManageItem";
import { useEffect } from "react";
import { connect } from 'react-redux'
import { actUsers } from "../../../redux/modules/users/action";
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'center',
        marginBottom: theme.spacing(2),
        textTransform: 'uppercase',
    },
    navLink: {
        marginRight: theme.spacing(2),
    },
    navLinkActive: {
        '& button': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
        }
    },
}))
const StudentManagePage = (props) => {
    const classes = useStyles()

    useEffect(() => {
        const type = props.match.params.type
        const key = type === 'all' ? '' : 'typeOfUser'
        props.fetchUsersByType(key, type)
    }, [props.match.params.type])

    const renderStudentList = (userList) => {
        if (userList && userList.length) {
            return userList.map((item) => (
                <Grid item xs={12} key={item.id}>
                    <StudentManageItem student={item}/>
                </Grid>
            ))
        } else {
            return <div>{userList ? 'No data' : 'loading...'}</div>
        }
    }
    return (
        <>
            <Typography variant="h4" component="h2" className={classes.title}>Student Management</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <NavLink className={classes.navLink} activeClassName={classes.navLinkActive} to="/admin/students/all">
                        <Button variant="contained">All</Button>
                    </NavLink>
                    <NavLink className={classes.navLink} activeClassName={classes.navLinkActive} to="/admin/students/GV">
                        <Button variant="contained">GV</Button>
                    </NavLink>
                    <NavLink className={classes.navLink} activeClassName={classes.navLinkActive} to="/admin/students/HV">
                        <Button variant="contained">HV</Button>
                    </NavLink>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        {renderStudentList(props.data)}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchUsersByType: (key, val) => {
        dispatch(actUsers(key, val))
      }
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      loading: state.usersReducer.loading,
      data: state.usersReducer.data
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(StudentManagePage)