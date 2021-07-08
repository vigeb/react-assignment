import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from 'react'
import { connect } from 'react-redux'
import { actSignUp } from './modules/action';
import validation from './validation';
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUpForm(props) {

  const [errors, setErrors] = useState({

  })

  const [taiKhoan, setTaiKhoan] = useState({
    "taiKhoan": "",
    "matKhau": "",
    "hoTen": "",
    "soDT": "",
    "email": "",
  })

  const history = useHistory()
  const classes = useStyles();
  const handleOnChange = (e) => {
    setTaiKhoan({
      ...taiKhoan, [e.target.name]: e.target.value
    })
  }

  const parseService = (search) => {
    if (search) {
      const serviceArr = search.split('?')[1].split('&')
      const service = {}
      serviceArr.forEach((item) => {
          const sv = item.split('=')
          service[sv[0]] = sv[1]
      })
      return service && service.slug
    }
    return null
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setErrors(validation(taiKhoan))
    if (Object.values(errors).length === 0) {
      props.signUp(taiKhoan, history, parseService(props.location.search))
    }

  }

  const errorTextStyle = {
    color: '#f44336',
    paddingLeft: '2px'
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <form className={classes.form} noValidate onSubmit={handleOnSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="taiKhoan"
                label="Tài khoản"
                name="taiKhoan"
                autoComplete="lname"
                onChange={handleOnChange}

                value={taiKhoan.taiKhoan}
              />
              {errors.taiKhoan && <Typography style={errorTextStyle} > {errors.taiKhoan}</Typography>}
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="fname"
                name="hoTen"
                variant="outlined"
                required
                fullWidth
                id="hoTen"
                label="Họ tên"
                autoFocus
                onChange={handleOnChange}
                value={taiKhoan.hoTen}
              />{errors.hoTen && <Typography style={errorTextStyle}>{errors.hoTen}</Typography>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Địa chỉ email"
                name="email"
                autoComplete="email"
                onChange={handleOnChange}
                value={taiKhoan.email}
              />{errors.email && <Typography style={errorTextStyle}>{errors.email}</Typography>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="soDT"
                label="Số điện thoại"
                name="soDT"
                onChange={handleOnChange}
                value={taiKhoan.soDT}
              />{errors.soDT && <Typography style={errorTextStyle}>{errors.soDT}</Typography>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="matKhau"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleOnChange}
                value={taiKhoan.matKhau}
              />{errors.matKhau && <Typography style={errorTextStyle}>{errors.matKhau}</Typography>}
            </Grid>
            {/* <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth className={classes.formControl}>
                <InputLabel fullWidth id="demo-simple-select-outlined-label">Mã nhóm</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"

                  label="Mã nhóm"
                  onChange={handleOnChange}
                  name="maNhom"
                  defaultValue="GP01"
                  value={taiKhoan.maNhom}
                >
                  <MenuItem key="GP01"
                    value="GP01"
                    onChange={handleOnChange}
                  >GP01</MenuItem>
                  {maNhomArr.map((maNhom) => (
                    <MenuItem key={maNhom}
                      value={maNhom}
                      onChange={handleOnChange}
                    >{maNhom}</MenuItem>
                  ))}

                </Select>
              </FormControl>
            </Grid> */}



          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>


        </form>
      </div>

    </Container >
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (u, h, s) => {
      dispatch(actSignUp(u, h, s))
    }
  }
}
export default connect(null, mapDispatchToProps)(SignUpForm)