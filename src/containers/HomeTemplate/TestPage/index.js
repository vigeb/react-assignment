import axios from "axios";
import { useEffect } from 'react'

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

  const handleTest = () => {
    let ID = JSON.parse(localStorage.getItem("credentials")).idToken

    axios({
      url: `https://react-asignment-default-rtdb.asia-southeast1.firebasedatabase.app/enrollment/1625472678465.json?auth=${ID}`,
      method: 'PATCH',
      data: {
        status: "approved",
      }
    })
      .then((res) => {
        console.log('res', res)
        alert('ok')
      })
      .catch((err) => {
        console.log('err', err)
        alert('err')
      })
  }
  return (<button onClick={handleTest}>submit</button>);
}

export default TestPage;