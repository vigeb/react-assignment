import axios from "axios";
import * as ActionType from "./constants";

export const actSignUp = (newUser) => {
    return (dispatch) => {
        dispatch(actSignUpRequest());
        const { email, hoTen, matKhau, taiKhoan, soDT } = newUser
        axios({
            url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCfvChusc7Nsg3Ba2PeJdl0KJXjTGjihUY`,
            method: "POST",
            data: {
                password: matKhau,
                email,
            }
        })
            .then((res) => {
                console.log('res', res)
                return axios({
                    url: `https://react-asignment-default-rtdb.asia-southeast1.firebasedatabase.app/users/${res.data.localId}.json?auth=${res.data.idToken}`,
                    method: 'PUT',
                    data: {
                        uid: res.data.localId,
                        account: taiKhoan,
                        displayName: hoTen,
                        phoneNumber: soDT,
                        typeOfUser: 'HV',
                    },
                })
            })
            .then((res) => {
                console.log('res 2', res)
                alert('ok')
                const credentials = {
                    displayName: hoTen,
                    phoneNumber: soDT,
                    typeOfUser: 'HV',
                    ...res.data,
                }
                localStorage.setItem('credentials', JSON.stringify(credentials))
                dispatch(actSignUpSuccess(credentials));
            })
            .catch((err) => {
                alert('err')
                console.log('err', err)
                dispatch(actSignUpFailed(err));
            });
    };
};

const actSignUpRequest = () => {
    return {
        type: ActionType.SIGN_UP_REQUEST,
    };
};
const actSignUpSuccess = (data) => {
    return {
        type: ActionType.SIGN_UP_SUCCESS,
        payload: data,
    };
};
const actSignUpFailed = (err) => {
    return {
        type: ActionType.SIGN_UP_FAILED,
        payload: err,
    };
};
