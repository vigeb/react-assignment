import axios from "axios";
import { useEffect, useState } from 'react'
import { exchangeRefreshToken } from "../../../global/authModule";

const TestPage = (props) => {
  // useEffect(() => {
  //   console.log('props', props)
  //   axios({
  //     url: 'https://react-asignment-default-rtdb.asia-southeast1.firebasedatabase.app/users.json',
  //     method: 'GET',
  //   })
  //     .then((res) => {
  //       console.log('res', res)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // })
  const [accessToken, setAccessToken] = useState('')


  const changeStatus = () => {
    console.log('status changed')
  }
  const log = (string) => {
    console.log(string)
  }
  log('đá')
  const handleTest = (status) => {
    const credentials = localStorage.getItem("credentials") && JSON.parse(localStorage.getItem("credentials"))

    if (!credentials.refreshToken) return
    exchangeRefreshToken(credentials.refreshToken)
      .then((tokenData) => {
        const idToken = tokenData.data.id_token
        return axios({
          url: `https://react-asignment-default-rtdb.asia-southeast1.firebasedatabase.app/enrollment/1625472759716.json?auth=${idToken}`,
          method: 'PATCH',
          data: {
            status: status,
          }
        })
      })
      .then((res) => {
        console.log('res', res)
        alert('ok')
      })
      .catch((err) => {

        console.log('test err', err)
      })

  }
  return (
    <button onClick={() => handleTest("pendding")} >submit</button>
  );

}

export default TestPage;