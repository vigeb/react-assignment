import axios from 'axios'
import * as ActionType from './constants'

export const actLogIn = (userLogIn) => {
    return (dispatch) => {
        console.log('pending')
        dispatch(actLogInRequest())
        const { email, matKhau } = userLogIn
        let credentials
        axios({
            url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCfvChusc7Nsg3Ba2PeJdl0KJXjTGjihUY",
            method: "POST",
            data: {
                email,
                password: matKhau,
                returnSecureToken: true,
            }
        }).then((res) => {
            console.log('user after log in', res)
            credentials = { ...res.data }
            return axios({
                url: `https://react-asignment-default-rtdb.asia-southeast1.firebasedatabase.app/users/${res.data.localId}.json?auth=${res.data.idToken}`,
                method: "GET",
            })
            
        })
        .then((res) => {
            console.log('user info', res)
            credentials.displayName = res.data.displayName
            credentials.phoneNumber = res.data.phoneNumber
            credentials.typeOfUser = res.data.typeOfUser

            dispatch(actLogInSuccess(credentials))
            localStorage.setItem('credentials', JSON.stringify(credentials))
        })
        .catch((err) => {
            console.log('err', err, err.message)
            dispatch(actLogInFailed(err))
        })
    }
}

const actLogInSuccess = (data) => {
    return {
        type: ActionType.LOG_IN_SUCCESS,
        payload: data
    }
}
const actLogInFailed = (error) => {
    return {
        type: ActionType.LOG_IN_FAILED,
        payload: error
    }
}
const actLogInRequest = () => {
    return {
        type: ActionType.LOG_IN_REQUEST,

    }
}