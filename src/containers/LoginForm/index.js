import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux'
import { actLogIn } from './modules/action';

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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


function Login(props) {
    const [userLogin, setUserLogin] = useState({})
    const classes = useStyles();
    const handleOnChange = (e) => {
        setUserLogin({
            ...userLogin, [e.target.name]: e.target.value
        })

    }
    console.log(userLogin)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(5)
        props.logInUser(userLogin)

    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form onSubmit={handleSubmit} className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="taiKhoan"
                        label="Tài khoản"
                        name="taiKhoan"
                        autoComplete="taiKhoan"
                        autoFocus
                        onChange={handleOnChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="matKhau"
                        label="Mật khẩu"
                        type="matKhau"
                        id="matKhau"
                        autoComplete="current-password"
                        onChange={handleOnChange}
                    />
                    {/* <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    /> */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}

                    >
                        Sign In
                    </Button>

                </form>
            </div>

        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        logInUser: (userLogIn) => {
            dispatch(actLogIn(userLogIn))
        }
    }
}

export default connect(null, mapDispatchToProps)(Login)