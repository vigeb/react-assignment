import { useState, useEffect } from 'react'
import axios from 'axios';
import { exchangeRefreshToken } from '../../../global/authModule'
import EnrollmentList from '../../../components/EnrollmentList';

const EnrollmentPage = (props) => {
  const [enrolls, setEnrolls] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('fetch', props.match.params.status)
    setLoading(true)
    const credentials = localStorage.getItem("credentials") && JSON.parse(localStorage.getItem("credentials"))

    if (!credentials || !credentials.refreshToken) return

    exchangeRefreshToken(credentials.refreshToken)
      .then((token) => {
        const { id_token } = token.data
        return axios({
          url: `https://react-asignment-default-rtdb.asia-southeast1.firebasedatabase.app/enrollment.json?auth=${id_token}&orderBy="status"&equalTo="${props.match.params.status}"&print=pretty`,
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
        setLoading(false)
      })
      .catch((err) => {
        setLoading(true)
        console.log('ee', err)
      })
  },[props.match.params.status])

  return (
    <>
      <EnrollmentList enrollList={enrolls} loading={loading} />
    </>
  )
}

export default EnrollmentPage