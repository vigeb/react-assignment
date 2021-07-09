import axios from "axios"

export const exchangeRefreshToken = (refreshToken) => {
  return axios({
    url: `https://securetoken.googleapis.com/v1/token?key=${process.env.REACT_APP_WEB_API_KEY}`,
    method: "POST",
    data: {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
    }
  })
}