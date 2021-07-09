import axios from 'axios'
import * as ActionType from './constants'

export const actLogIn = (userLogIn, history, service) => {
    return (dispatch) => {

        dispatch(actLogInRequest())
        const { email, matKhau } = userLogIn
        let credentials
        axios({
            url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_WEB_API_KEY}`,

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
                url: `${process.env.REACT_APP_API_URL}/users/${res.data.localId}.json?auth=${res.data.idToken}`,
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

            history.push(`/${service ? service : ''}`)

        })
        .catch((err) => {
            console.log('err', err, err.message)
            dispatch(actLogInFailed(err))
        })
            .then((res) => {
                credentials.displayName = res.data.displayName
                credentials.phoneNumber = res.data.phoneNumber
                credentials.typeOfUser = res.data.typeOfUser

                console.log('credentials', credentials)
                dispatch(actLogInSuccess(credentials))
                localStorage.setItem('credentials', JSON.stringify(credentials))
            })
            .catch((err) => {
                console.log('response', err.data)
                dispatch(actLogInFailed(err.data))
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