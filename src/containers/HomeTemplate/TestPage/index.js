import axios from "axios";
import { useEffect } from 'react'

const TestPage = () => {
  useEffect(() => {
    axios({
      url: 'https://react-asignment-default-rtdb.asia-southeast1.firebasedatabase.app/users.json',
      method: 'GET',
    })
    .then((res) => {
      console.log('res', res)
    })
    .catch((err) => {
      console.log(err)
    })
  })

  const handleTest = () => {
    axios({
      url: 'https://react-asignment-default-rtdb.asia-southeast1.firebasedatabase.app/post.json?auth=eyJhbGciOiJSUzI1NiIsImtpZCI6IjhiMjFkNWE1Y2U2OGM1MjNlZTc0MzI5YjQ3ZDg0NGE3YmZjODRjZmYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVhY3QtYXNpZ25tZW50IiwiYXVkIjoicmVhY3QtYXNpZ25tZW50IiwiYXV0aF90aW1lIjoxNjI1MjcxMTQ1LCJ1c2VyX2lkIjoiaG9LcGlLcW1LdFRscjNYdzBvYkhMOGNjSFJEMyIsInN1YiI6ImhvS3BpS3FtS3RUbHIzWHcwb2JITDhjY0hSRDMiLCJpYXQiOjE2MjUyNzExNDUsImV4cCI6MTYyNTI3NDc0NSwiZW1haWwiOiJuZXcxMjM0NUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibmV3MTIzNDVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.TswuZ8ppv5Eg_lYiHm4MX5I7-fy1_lrLKOxmtQFlWeK_Dt-x8UY9VEbNyvDH31kCSU7B8EP2qHQarRDRY-SV3IJbsexdZjgcxKYL18VZdiMaAhwMn-P7ZUbz2FsIsm99XgwRHVjMwnMVMRwFPvuZLaC4b2eBVckQVqaroy1TKyhnn5hCm94mmTj857t-nj_-qtick0EjwCNt8yHTR_0VcFOuGH1_st7i1WZ2uJQMrbXwiYDo55cX5gRDrv2flLln49c43i3MmZAJH21xOabPS_ZDmQTV-MA91hW3lR6_28xV_oAN1TyWjmf_t1_MUAb2Xz6V96haGkFprPjVRGPyZQ',
      method: 'POST',
      data: {
        test: '123',
      },
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
  return ( <button onClick={handleTest}>submit</button> );
}
 
export default TestPage;