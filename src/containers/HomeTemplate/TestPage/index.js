import axios from "axios";

const TestPage = () => {
  const handleTest = () => {
    let ID = JSON.parse(localStorage.getItem("credentials")).idToken
    axios({
      url: `https://react-asignment-default-rtdb.asia-southeast1.firebasedatabase.app/courses/-MdjWHqNEgZYMwD6sTeR.json`,
      method: 'GET',
      // data: {
      //   da: 5
      // }


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