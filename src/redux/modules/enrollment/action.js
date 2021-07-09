import axios from 'axios'
import * as ActionType from './constants'
import { exchangeRefreshToken } from '../../../global/authModule'

export const actEnroll = (key, val) => {
    return (dispatch) => {

        dispatch(actEnrollRequest())
        
        const credentials = localStorage.getItem("credentials") && JSON.parse(localStorage.getItem("credentials"))

        if (!credentials || !credentials.refreshToken) return dispatch(actEnrollFailed('unauthorized'))

        exchangeRefreshToken(credentials.refreshToken)
          .then((token) => {
            const { id_token } = token.data
            return axios({
              url: `https://react-asignment-default-rtdb.asia-southeast1.firebasedatabase.app/enrollment.json?auth=${id_token}&orderBy="${key}"&equalTo="${val}"&print=pretty`,
              method: 'GET',
            })
          })
          .then((res) => {
            console.log('data', res.data)
            const enrollList = []
            for (let key in res.data) {
              enrollList.push({
                ...res.data[key],
                id: key,
              })
            }
            dispatch(actEnrollSuccess(enrollList))
          })
          .catch((err) => {
            dispatch(actEnrollFailed(err))
            console.log('ee', err)
          })
    }
}

const actEnrollSuccess = (data) => {
    return {
        type: ActionType.ENROLL_SUCCESS,
        payload: data
    }
}
const actEnrollFailed = (error) => {
    return {
        type: ActionType.ENROLL_FAILED,
        payload: error
    }
}
const actEnrollRequest = () => {
    return {
        type: ActionType.ENROLL_REQUEST,

    }
}