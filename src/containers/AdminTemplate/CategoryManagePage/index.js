import { useEffect } from 'react'
import CategoryManageItem from '../../../components/CategoryManageItem'
import { actFetchCategoryList } from './modules/action'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'

const CategoryManagePage = (props) => {
  useEffect(() => {
    props.fetchCategoryList()
  }, [])

  const renderCategoryList = () => {
    console.log('cat data', props.data)
    const catList = props.data
    if (catList) {
      let catListArr = []
      for (let key in catList) {
        catListArr.unshift({
          ...catList[key],
          id: key,
        })
      }
      return catListArr.map((item) => {
        return (
          <Grid item xs={12} key={item.id}>
            <CategoryManageItem category={item} />
          </Grid>
        )
      })
    } else {
      return <div>loading...</div>
    }
  }
  return (
    <>
      <Grid container spacing={2}>
        {renderCategoryList()}
      </Grid>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategoryList: () => {
      dispatch(actFetchCategoryList())
    },
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.getCategoryReducer.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryManagePage)