import { useEffect } from 'react'
import ProfileList from '../../../components/ProfileList';
import { actEnroll } from '../../../redux/modules/enrollment/action';
import { connect } from 'react-redux'

const ProfilePage = (props) => {
    useEffect(() => {
        props.fetchEnrollmentByUid('uid', props.match.params.uid)
    }, [props.match.params.status, props.match.params.uid])

    return (
        <>
            <ProfileList data={props.data} loading={props.loading} status={props.match.params.status} uid={props.match.params.uid} />
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchEnrollmentByUid: (key, val) => {
        dispatch(actEnroll(key, val))
      }
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      loading: state.enrollReducer.loading,
      data: state.enrollReducer.data
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)