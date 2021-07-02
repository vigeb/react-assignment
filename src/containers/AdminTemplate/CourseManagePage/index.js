import { makeStyles } from '@material-ui/core/styles';
import CourseManageItem from "../../../components/CourseManageItem";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import { actFetchCourseList } from '../../HomeTemplate/HomePage/modules/action';
import { useEffect, useState } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    textTransform: 'uppercase',
  },
}))



const CourseManagePage = (props) => {
  const classes = useStyles()
  // const [courseList, setCourseList] = useState([])
  const [maNhom, setMaNhom] = useState('GP01');

  const handleChange = (event) => {

    setMaNhom(

      event.target.value,
    );
  };
  const maNhomArr = [
    'GP02', 'GP03', 'GP04', 'GP05', 'GP06', 'GP07', 'GP08', 'GP09', 'GP10',
  ];

  // useEffect(() => {
  //   props.fetchCourseList(maNhom)
  //   setCourseList(props.data)

  // }, [])
  const { fetchCourseList } = props
  useEffect(() => {
    fetchCourseList(maNhom)
  }, [fetchCourseList, maNhom])
  let errMessage = ''


  console.log('errMessage' + errMessage)
  const renderCourseList = () => {
    const courseList = props.data
    if (courseList && courseList.length) {
      return courseList.map((item) => {
        return (
          <Grid item xs={12} key={item.maKhoaHoc}>

            <CourseManageItem course={item} courseId={item.maKhoaHoc} key={item.maKhoaHoc} />
          </Grid>
        )
      })
    } else {
      return <div>loading...</div>
    }
  }
  // console.log(maNhom)
  // console.log('list' + courseList)

  return (
    <>
      <Typography variant="h4" component="h2" className={classes.title}>Course Management</Typography>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
        <NativeSelect

          value={maNhom}
          onChange={handleChange}
          defaultValue="GP01"
        >
          <option
            //  aria-label="None"
            value="GP01" onChange={handleChange}>GP01</option>
          {maNhomArr.map((maNhom) => (
            <option onChange={handleChange} value={maNhom}>{maNhom}</option>
          ))}

        </NativeSelect>
      </FormControl>
      <Grid container spacing={2}>
        {renderCourseList()}
      </Grid>
    </>
  )
}

const mapStateToProps = (state) => {
  console.log('reducer list', state.courseListReducer.data)
  return {
    data: state.courseListReducer.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCourseList: (maNhom) => {
      dispatch(actFetchCourseList(maNhom))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseManagePage);