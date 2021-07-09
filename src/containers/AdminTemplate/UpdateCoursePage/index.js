import { useEffect, useState } from 'react'
import FormAddCourse from '../../../components/FormAddCourse'
import axios from 'axios'
import { Container } from '@material-ui/core'
import Loading from '../../../components/Loading'

const UpdateCoursePage = (props) => {
  const [course, setCourse] = useState(null)

  useEffect(() => {
    console.log('id', props.match.params.id)
    axios({
      url: `https://react-asignment-default-rtdb.asia-southeast1.firebasedatabase.app/courses/${props.match.params.id}.json`,
      method: 'GET',
    })
      .then((res) => {
        console.log('res', res.data)
        setCourse({
          ...res.data,
        })
      })
      .catch((err) => {
        console.log('err', err)
      })
  }, [])

  const renderFormUpdate = (courseDetail) => {
    if (courseDetail) {
      return <FormAddCourse updateMode={true} courseDetail={courseDetail} courseId={props.match.params.id} />
    } else {
      return <Container ><Loading /></Container>
    }
  }

  return (
    <>
      {renderFormUpdate(course)}
    </>
  )
}

export default UpdateCoursePage