import FormAddCourse from '../../../components/FormAddCourse'
import connect from 'react-redux'

const UpdateCoursePage = (props) => {

  return (
    <>
      <FormAddCourse updateMode={true} maKhoaHoc={props.match.params.id} />
    </>
  )
}


export default UpdateCoursePage