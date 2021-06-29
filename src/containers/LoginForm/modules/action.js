import axios from 'axios'
import * as ActionType from './constants'

export const actLogIn = (userLogIn) => {
    return (dispatch) => {
        console.log('pending')
        dispatch(actLogInRequest())
        axios({
            url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            method: "POST",
            data: userLogIn
        }).then((res) => {
<<<<<<< HEAD

=======
            console.log('res act', res)
>>>>>>> 5efd76541e94ac6d3751cb9b29e06fc5c3c61370
            dispatch(actLogInSuccess(res.data))
            localStorage.setItem('credentials', JSON.stringify(res.data))
        }).catch((err) => {
            console.log('err', err)
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