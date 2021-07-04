import React, { useEffect, useState } from "react";
// import CourseList from "../../../components/CourseList"
import { actFetchCourseList } from "./modules/action";
import { connect } from "react-redux";
import CourseList from "../../../components/CourseList";
import { Container } from "@material-ui/core";

const HomePage = (props) => {
  const [state, setState] = useState("GP01")
  const recieveMaNhom = (maNhom) => {

    setState(maNhom)

  }


  useEffect(() => {

    props.fetchCourseList(state)

  }, [state])


  console.log(props.data)
  let courseList = props.data
  let courseArr = []
  if (courseList) {
    for (let key in courseList) {
      courseArr.unshift({
        ...courseList[key],
        id: key
      })
    }
  }
  console.log(courseArr)
  return (<div>
    <Container>

      <CourseList data={courseArr} onGetMaNhom={recieveMaNhom} />
    </Container>

  </div>);
}

const mapStateToProps = (state) => {
  console.log(state.courseListReducer.data)

  return {
    loading: state.courseListReducer.loading,
    data: state.courseListReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCourseList: (maNhom) => {
      dispatch(actFetchCourseList(maNhom));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);