import axios from 'axios'
import * as ActionType from './constants'

export const actAuth = (refreshToken) => {
    return (dispatch) => {
        console.log('pending')
        dispatch(actAuthRequest())
        axios({
            url: "https://securetoken.googleapis.com/v1/token?key=AIzaSyCfvChusc7Nsg3Ba2PeJdl0KJXjTGjihUY",
            method: "POST",
            data: {
                grant_type: 'refresh_token',
                refresh_token: refreshToken,
            }
        })
        .then((res) => {
            console.log('refresh token', res)
            dispatch(actAuthSuccess(res.data))
            localStorage.setItem('credentials', JSON.stringify(res.data))
        })
        .catch((err) => {
            console.log('err', err, err.message)
            dispatch(actAuthFailed(err))
        })
    }
}

const actAuthSuccess = (data) => {
    return {
        type: ActionType.AUTH_SUCCESS,
        payload: data
    }
}
const actAuthFailed = (error) => {
    return {
        type: ActionType.AUTH_FAILED,
        payload: error
    }
}
const actAuthRequest = () => {
    return {
        type: ActionType.AUTH_REQUEST,

    }
}