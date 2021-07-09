import axios from 'axios'
import * as ActionType from './constants'
import { exchangeRefreshToken } from '../../../global/authModule'

export const actUsers = (key, val) => {
    return (dispatch) => {

        dispatch(actUsersRequest())
        
        const credentials = localStorage.getItem("credentials") && JSON.parse(localStorage.getItem("credentials"))

        if (!credentials || !credentials.refreshToken) return dispatch(actUsersFailed('unauthorized'))

        exchangeRefreshToken(credentials.refreshToken)
          .then((token) => {
            const { id_token } = token.data
            return axios({
              url: `${process.env.REACT_APP_API_URL}/users.json?auth=${id_token}${key ? `&orderBy="${key}"&equalTo="${val}"&print=pretty` : ''}`,
              method: 'GET',
            })
          })
          .then((res) => {
            console.log('data', res.data)
            const userList = []
            for (let key in res.data) {
              userList.push({
                ...res.data[key],
                id: key,
              })
            }
            console.log('userlist data', userList)
            dispatch(actUsersSuccess(userList))
          })
          .catch((err) => {
            dispatch(actUsersFailed(err))
            console.log('ee', err)
          })
    }
}

const actUsersSuccess = (data) => {
    return {
        type: ActionType.USERS_SUCCESS,
        payload: data
    }
}
const actUsersFailed = (error) => {
    return {
        type: ActionType.USERS_FAILED,
        payload: error
    }
}
const actUsersRequest = () => {
    return {
        type: ActionType.USERS_REQUEST,

    }
}