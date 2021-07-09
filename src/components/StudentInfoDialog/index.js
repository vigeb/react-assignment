import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import Typography from '@material-ui/core/Typography';
import { exchangeRefreshToken } from '../../global/authModule';
import axios from 'axios';
import { Container } from '@material-ui/core';
import Loading from '../Loading';

const emails = ['username@gmail.com', 'user02@gmail.com'];


function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;
    const handleClose = () => {
        onClose(selectedValue);
    };


    const { userInfo, loading, setLoading } = props

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} fullWidth="true">

            <> {(loading) ? <Container><Loading /></Container> : <><DialogTitle id="simple-dialog-title">User name: {userInfo.displayName}</DialogTitle>
                <List>
                    <ListItem>
                        <Typography>Account: {userInfo.account}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>Gmail: {userInfo.email}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>Tel. {userInfo.phoneNumber}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>User type : {userInfo.typeOfUser}</Typography>
                    </ListItem>



                </List></>}</>
            <Button variant="contained" color="primary" onClick={handleClose}>Close</Button>

        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function StudentInfoDialog(props) {
    console.log(props)
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);
    const [userInfo, setUserInfo] = useState({
        courseId: "",
        courseName: "",
        displayName: "",
        email: "",
        id: "",
        price: "",
        status: "",
        uid: ""
    })
    const [loading, setLoading] = useState("true")
    const handleOnClick = () => {
        setOpen(true);
        const credentials = localStorage.getItem("credentials") && JSON.parse(localStorage.getItem("credentials"))

        if (!credentials.refreshToken) return
        exchangeRefreshToken(credentials.refreshToken)
            .then((tokenData) => {
                const idToken = tokenData.data.id_token
                return axios({
                    url: `${process.env.REACT_APP_API_URL}/users/${props.data.uid}.json?auth=${idToken}`,
                    method: 'GET',

                })
            })
            .then((res) => {
                console.log('res', res)
                setUserInfo(res.data)
                setLoading(false)
            })
            .catch((err) => {

                console.log('test err', err)
            })

    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div>

            <Button variant="contained" color="primary" onClick={handleOnClick}>
                View detail
            </Button>
            <SimpleDialog userInfo={userInfo} selectedValue={selectedValue} open={open} setLoading={setLoading} loading={loading} onClose={handleClose} />
        </div>
    );
}