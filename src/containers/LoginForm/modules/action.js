import axios from 'Axios'
import * as ActionType from './constants'

export const actLogIn = (userLogIn) => {
    return (dispatch) => {
        dispatch(actLogInRequest())
        axios({
            url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            method: "POST",
            data: userLogIn
        }).then((res) => {
            console.log(res)
            dispatch(actLogInSuccess(res.data))
            localStorage.setItem('credentials', JSON.stringify(res.data))
        }).catch((err) => {
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
        type: ActionType.LOG_IN_SUCCESS,
        payload: error
    }
}
const actLogInRequest = () => {
    return {
        type: ActionType.LOG_IN_SUCCESS,

    }
}