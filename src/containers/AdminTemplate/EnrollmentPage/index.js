import { useState, useEffect } from 'react'
import UserManageItem from "../../../components/UserManageItem";
import { Grid } from '@material-ui/core';
import axios from 'axios';
import { exchangeRefreshToken } from '../../../global/authModule'

const EnrollmentPage = (props) => {
  const [enrolls, setEnrolls] = useState([])

  useEffect(() => {
    const credentials = localStorage.getItem("credentials") && JSON.parse(localStorage.getItem("credentials"))

    if (!credentials || !credentials.refreshToken) return

    exchangeRefreshToken(credentials.refreshToken)
      .then((token) => {
        const { id_token } = token.data
        return axios({
          url: `https://react-asignment-default-rtdb.asia-southeast1.firebasedatabase.app/enrollment.json?auth=${id_token}`,
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
        setEnrolls(enrollList)
      })
      .catch((err) => {
        console.log('ee', err)
      })
  },[])

  const renderEnrollList = (lst) => {
    if (lst.length) {
      return lst.map((enroll) => (
          <Grid item key={enroll.id} xs={12}>
            <UserManageItem enrollment={enroll} />
          </Grid>
        )
      )
    } else {
      return <div>loading...</div>
    }
  }

  return (
    <Grid container spacing={3}>
      {renderEnrollList(enrolls)}
    </Grid>
  )
}

export default EnrollmentPage