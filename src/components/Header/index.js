import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FaceIcon from '@material-ui/icons/Face'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { Box, Grid } from '@material-ui/core';
import AccountHeader from '../AccountHeader';

const useStyles = makeStyles((theme) => ({

    toolBar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'block',
        flexGrow: 1,
        paddingLeft: '1rem',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },

}));

function Header(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null)

    const localCredentials = localStorage.getItem("credentials") && JSON.parse(localStorage.getItem("credentials"))

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar className={classes.toolBar}>
                    {/* <Box display="flex" > */}
                    <Typography edge="start" variant="h6" >
                        <Link to="/">Homepage</Link>
                    </Typography>
                    {/* {localCredentials && localCredentials.typeOfUser === "GV" ?
                        <Typography edge="start" className={classes.title} variant="h6" >
                            <Link to="/admin/dashboard">Admin page</Link>
                        </Typography>
                        : null
                    } */}

                    {/* </Box> */}

                    <div className={classes.sectionDesktop}>
                        {/* <Button style={{ color: 'white' }} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <AccountCircleIcon />
                        </Button> */}
                        <AccountHeader credentials={props.credentials || localCredentials} />
                        {/* {renderCredentials()} */}
                    </div>
                </Toolbar>
            </AppBar>
        </div >
    );
}

const mapStateToProps = (state) => {
    return {
        credentials: state.logInReducer.data,
    }
}

export default connect(mapStateToProps, null)(Header)