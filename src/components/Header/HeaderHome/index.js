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
  // search: {
  //   position: 'relative',

  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: fade(theme.palette.common.white, 0.15),
  //   '&:hover': {
  //     backgroundColor: fade(theme.palette.common.white, 0.25),
  //   },
  //   marginRight: theme.spacing(2),
  //   marginLeft: 0,
  //   width: '100%',
  //   display: 'none',
  //   [theme.breakpoints.up('sm')]: {
  //     marginLeft: theme.spacing(3),
  //     width: 'auto',
  //     display: 'block',
  //   },
  // },
  // searchIcon: {
  //   padding: theme.spacing(0, 2),
  //   height: '100%',
  //   position: 'absolute',
  //   pointerEvents: 'none',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // inputRoot: {
  //   color: 'inherit',
  // },
  // inputInput: {
  //   padding: theme.spacing(1, 1, 1, 0),
  //   // vertical padding + font size from searchIcon
  //   paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  //   transition: theme.transitions.create('width'),
  //   width: '100%',
  //   [theme.breakpoints.up('md')]: {
  //     width: '20ch',
  //   },
  // },
  sectionDesktop: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  // sectionMobile: {
  //   display: 'flex',
  //   [theme.breakpoints.down('md')]: {
  //     display: 'flex',
  //   },
  // },

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
  const handleOpenProfile = () => {
    setAnchorEl(null);
    history.push('/profile')
  }

  const history = useHistory()

  const handleLogOut = () => {
    setAnchorEl(null);
    localStorage.clear()
    history.push('/login')
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
          <MenuItem onClick={handleClose}>Tài khoản của tôi</MenuItem>
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

          <MenuItem onClick={handleOpenProfile}>Tài khoản của tôi</MenuItem>
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