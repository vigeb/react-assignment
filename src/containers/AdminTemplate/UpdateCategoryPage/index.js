import axios from 'axios'
import { useEffect, useState } from 'react'
import FormManageCategory from '../../../components/FormManageCategory'

const UpdateCategoryPage = (props) => {
  const [category, setCategory] = useState(null)
  const id = props.match.params.id

  useEffect(() => {
    axios({
      url: `${process.env.REACT_APP_API_URL}/categories/${id}.json`,
      method: 'GET',
    })
    .then((res) => {
      setCategory({
        ...res.data,
      })
    })
    .catch((err) => {
      console.log('err', err)
    })
  }, [])

  const renderFormCategory = (categ) => {
    if (categ) {
      return <FormManageCategory categoryDetail={categ} categoryId={id} updateMode />
    } else {
      return <div>loading...</div>
    }
  }
 
  return (
    <>
      {renderFormCategory(category)}
    </>
  )
}

export default UpdateCategoryPage