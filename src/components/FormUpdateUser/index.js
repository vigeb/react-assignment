import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel';
import slugify from 'slugify'
import axios from "axios";
import { exchangeRefreshToken } from '../../global/authModule'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: '1rem',
    },
    formControl: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: theme.spacing(2),
    },
    buttonSubmit: {
        marginTop: '1.5rem',
    },
    title: {
        fontSize: '2rem',
        textAlign: 'center',
        fontWeight: '600',
        marginBottom: '2rem',
    },
}))

const UpdateUserPage = (props) => {
    const classes = useStyles()
    const { userDetail, userId } = props
    const [detailUser, setDetailUser] = useState({
        ...userDetail || {
            account: "",
            displayName: "",
            email: "",
            phoneNumber: "",
            typeOfUser: "",

        }
    })
    console.log(userDetail)


    const [loading, setLoading] = useState(false)

    const history = useHistory()

    const handleUserName = (e) => {

        setDetailUser({
            ...detailUser,
            courseName: e.target.value
        })
    }


    const handleUserInfo = (e) => {
        setDetailUser({
            ...detailUser,
            [e.target.name]: e.target.value,
        })
    }


    const updateUser = (idToken, { date, uid }) => {
        return axios({
            url: `${process.env.REACT_APP_API_URL}/users/${userId}.json?auth=${idToken}`,
            method: 'PUT',
            data: {
                ...detailUser,
                updatedDate: date,
                uid,
            },
        })
    }

    const handleOnSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        const credentials = localStorage.getItem("credentials") && JSON.parse(localStorage.getItem("credentials"))

        if (!credentials.refreshToken) return

        exchangeRefreshToken(credentials.refreshToken)
            .then((tokenData) => {
                const idToken = tokenData.data.id_token
                const uid = tokenData.data.user_id

                let today = new Date();
                let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

                const extraUserInfo = { date, uid, }

                return updateUser(idToken, extraUserInfo)

            })
            .then((res) => {
                history.push('/admin/students/all')
            })
            .catch((err) => {
                setLoading(false)
            })
    }
    console.log(props)
    return (
        <div className={classes.root}>
            <Typography variant="h1" component="h1" className={classes.title}>Update user</Typography>
            <form onSubmit={handleOnSubmit}>
                <FormControl className={classes.formControl}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        id="account"
                        label="Account"
                        name="account"
                        autoComplete="account"
                        value={detailUser.account}
                        autoFocus
                        onBlur={handleUserName}
                        onChange={handleUserInfo}
                    />


                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        id="displayName"
                        label="Display name"
                        name="displayName"
                        autoComplete="displayName"
                        value={detailUser.displayName}
                        rows={6}
                        onChange={handleUserInfo}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        value={detailUser.email}
                        rows={6}
                        onChange={handleUserInfo}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        id="phoneNumber"
                        label="Phone number"
                        name="phoneNumber"
                        autoComplete="phoneNumber"
                        value={detailUser.phoneNumber}
                        rows={6}
                        onChange={handleUserInfo}
                    />

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="typeOfUser">Type of user</InputLabel> 
                        <Select
                            required
                            labelId="typeOfUser"
                            id="typeOfUser"
                            name="typeOfUser"
                            onChange={handleUserInfo}
                            label="Type of user"
                            value={detailUser.typeOfUser}
                        >
                            <MenuItem value="HV" key="typeOfUser">
                                HV
                            </MenuItem>
                            <MenuItem value="GV" key="typeOfUser">
                                GV
                            </MenuItem>

                        </Select>
                    </FormControl>



                    <Button className={classes.buttonSubmit} size="large" variant="contained" color="primary" type="submit" disabled={loading}>
                        <Typography>Update</Typography>
                    </Button>
                </FormControl>
            </form>
        </div>
    )
}

export default UpdateUserPage;