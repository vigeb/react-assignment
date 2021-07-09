import { useEffect, useState } from 'react'
import FormUpdateUser from '../../../components/FormUpdateUser'
import axios from 'axios'
import { Container } from '@material-ui/core'
import Loading from '../../../components/Loading'
import { exchangeRefreshToken } from '../../../global/authModule'
const UpdateUserPage = (props) => {
    const [userDetail, setUserDetail] = useState(null)
    console.log(props)
    useEffect(() => {
        const credentials = localStorage.getItem("credentials") && JSON.parse(localStorage.getItem("credentials"))

        if (!credentials.refreshToken) return
        exchangeRefreshToken(credentials.refreshToken)
            .then((data) => {
                const uid = data.data.id_token
                return axios({
                    url: `https://react-asignment-default-rtdb.asia-southeast1.firebasedatabase.app/users/${props.match.params.uid}.json?auth=${uid}`,
                    method: 'GET',
                })
                    .then((res) => {
                        console.log('res', res.data)
                        setUserDetail({
                            ...res.data,
                        })
                    })
                    .catch((err) => {
                        console.log('err', err)
                    })
            })

    }, [])

    const renderFormUpdate = (userDetail) => {
        if (userDetail) {
            return <FormUpdateUser userDetail={userDetail} userId={props.match.params.uid} />
        } else {
            return <Container ><Loading /></Container>
        }
    }

    return (
        <>
            {renderFormUpdate(userDetail)}
        </>
    )
}

export default UpdateUserPage