import { useState } from 'react'
import { Menu, Typography, MenuItem, Button } from "@material-ui/core";
import { Link, useHistory } from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const AccountHeader = (props) => {
  const [anchorEl, setAnchorEl] = useState(null)

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

  const pushTo = (path) => {
    history.push(path)
  }

  const renderMenu = (credentials) => {
    if (credentials && credentials.displayName && credentials.typeOfUser) {
      return (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Typography style={{ padding: '6px', paddingLeft: '16px', fontSize: '1.5rem' }}>Xin chào,<br></br>{credentials.displayName} </Typography>
          {credentials.typeOfUser === 'GV' ?
            <MenuItem onClick={() => pushTo('/admin/dashboard')}>Admin Page</MenuItem>
            : null
          }
          <MenuItem onClick={() => handleToProfile(credentials.localId)}>Profile</MenuItem>
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
    <>
      <Button style={{ color: 'white' }} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <AccountCircleIcon />
      </Button>
      {renderMenu(props.credentials)}
    </>
  )
}

export default AccountHeader