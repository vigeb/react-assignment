import { useState, useEffect } from 'react'
import axios from 'axios';
import { exchangeRefreshToken } from '../../../global/authModule'
import ProfileList from '../../../components/ProfileList';


const ProfilePage = () => {
    const [profile, setProfile] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const credentials = localStorage.getItem("credentials") && JSON.parse(localStorage.getItem("credentials"))

        if (!credentials || !credentials.refreshToken) return

        exchangeRefreshToken(credentials.refreshToken)
            .then((token) => {
                const { id_token, user_id } = token.data
                return axios({
                    url: `https://react-asignment-default-rtdb.asia-southeast1.firebasedatabase.app/enrollment.json?auth=${id_token}&orderBy="uid"&equalTo="${user_id}"&print=pretty`,
                    method: 'GET',
                })
            })
            .then((res) => {
                console.log('data', res.data)
                const profileList = []
                for (let key in res.data) {
                    profileList.push({
                        ...res.data[key],
                        id: key,
                    })
                }
                setProfile(profileList)

                setLoading(false)
            })
            .catch((err) => {
                setLoading(false)
                console.log('ee', err)
            })
    }, [])

    return (
        <ProfileList profile={profile} loading={loading} setLoading={setLoading} />
    )
}

export default ProfilePage