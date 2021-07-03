import * as ActionType from './constants'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { exchangeRefreshToken } from '../../../global/authModule'

export const actSubmitCategory = (submitCategory, updateMode, id) => {
    const credentials = localStorage.getItem("credentials") && JSON.parse(localStorage.getItem("credentials"))
    
    return async (dispatch) => {
        try {
            if (!credentials.refreshToken) return dispatch(actSubmitCategoryFailed('unauthorized'))
    
            dispatch(actSubmitCategoryRequest())
            const tokenData = await exchangeRefreshToken(credentials.refreshToken)
    
            const idToken = tokenData.data.id_token
            const uid = tokenData.data.user_id
    
            let today = new Date();
            let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

            if (updateMode) {
                const updatedCategory = await axios({
                    url: `https://react-asignment-default-rtdb.asia-southeast1.firebasedatabase.app/categories/${id}.json?auth=${idToken}`,
                    method: 'PUT',
                    data: {
                        ...submitCategory,
                        updatedDate: date,
                        uid,
                    },
                })
                console.log('updated course', updatedCategory.data)
                alert('ok')
                dispatch(actSubmitCategorySuccess(updatedCategory.data))
            } else {
                const createdCategory = await axios({
                    url: `https://react-asignment-default-rtdb.asia-southeast1.firebasedatabase.app/categories.json?auth=${idToken}`,
                    method: 'POST',
                    data: {
                        ...submitCategory,
                        createdDate: date,
                        uid,
                    },
                })
    
                dispatch(actSubmitCategorySuccess(createdCategory.data))
            }
        } catch (err) {
            console.log('create err', err)
            dispatch(actSubmitCategoryFailed(err))
        }
    }
}
const actSubmitCategoryRequest = () => {
    return {
        type: ActionType.SUBMIT_CATEGORY_REQUEST
    }
}
const actSubmitCategorySuccess = (data) => {
    return {
        type: ActionType.SUBMIT_CATEGORY_SUCCESS,
        payload: data
    }
}
const actSubmitCategoryFailed = (err) => {
    return {
        type: ActionType.SUBMIT_CATEGORY_FAILED,
        payload: err
    }
}