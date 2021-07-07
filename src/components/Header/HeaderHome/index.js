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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory()

  const handleLogOut = () => {
    setAnchorEl(null);
    localStorage.clear()
    history.push('/login')
  }

  const handleToProfile = (uid) => {
    if (uid) {
      history.push(`/profile/${uid}/pending`)
    } else {
      history.push(`/login?slug=profile/${uid}/pending`)
    }
  }

  const renderCredentials = () => {
    if (props.credentials && localStorage.getItem("credentials")) {
      return (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Typography style={{ padding: '6px', paddingLeft: '16px', fontSize: '1.5rem' }}>Xin chào,<br></br>{props.credentials.displayName} </Typography>
          <MenuItem onClick={handleClose}>Hồ sơ</MenuItem>
          <MenuItem onClick={() => handleToProfile(props.credentials.localId)}>Profile</MenuItem>
          <MenuItem onClick={handleClose} onClick={handleLogOut}>Đăng xuất</MenuItem>
        </Menu>
      )
    }
    const localCredentials = localStorage.getItem("credentials") && JSON.parse(localStorage.getItem("credentials"))

    if (localCredentials && localCredentials.displayName) {
      return (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Typography style={{ padding: '6px', paddingLeft: '16px', fontSize: '1.5rem' }}>Xin chào,<br></br>{localCredentials.displayName} </Typography>
          <MenuItem onClick={() => handleToProfile(localCredentials.localId)}>Profile</MenuItem>
          <MenuItem onClick={handleLogOut}>Đăng xuất</MenuItem>
        </Menu>
      )
    }

    return (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to='/signup'><MenuItem style={{ color: 'black' }}>
          Đăng ký
        </MenuItem></Link>
        <Link to='/login'><MenuItem style={{ color: 'black' }}>
          Đăng nhập
        </MenuItem></Link>
      </Menu>
    )
  }

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <Typography edge="start" className={classes.title} variant="h6" >
            <Link to="/">Trang chủ</Link>
          </Typography>


          <div className={classes.sectionDesktop}>
            <Button style={{ color: 'white' }} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <AccountCircleIcon />
            </Button>
            {renderCredentials()}
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