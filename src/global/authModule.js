import axios from "axios"

export const exchangeRefreshToken = (refreshToken) => {
  return axios({
    url: "https://securetoken.googleapis.com/v1/token?key=AIzaSyCfvChusc7Nsg3Ba2PeJdl0KJXjTGjihUY",
    method: "POST",
    data: {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
    }
  })
}