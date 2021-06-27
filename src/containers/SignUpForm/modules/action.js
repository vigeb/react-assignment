import axios from "Axios";
import * as ActionType from "./constants";

export const actSignUp = (newUser) => {
    return (dispatch) => {
        dispatch(actSignUpRequest());
        axios({
            url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
            method: "POST",
            data: newUser
        })
            .then((res) => {
                console.log(res)
                dispatch(actSignUpSuccess(res.data));
            })
            .catch((err) => {
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
