import { useEffect } from 'react'
import EnrollmentList from '../../../components/EnrollmentList';
import { connect } from 'react-redux'
import { actEnroll } from '../../../redux/modules/enrollment/action';

const EnrollmentPage = (props) => {

  useEffect(() => {
    props.fetchEnrollmentByStatus('status', props.match.params.status)
  }, [props.match.params.status])

  return (

    <EnrollmentList enrollList={props.data} loading={props.loading} />

  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEnrollmentByStatus: (key, val) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(EnrollmentPage)