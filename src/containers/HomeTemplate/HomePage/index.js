import React, { useEffect, useState } from "react";
import { actFetchCourseList } from "./modules/action";
import { connect } from "react-redux";
import CourseList from "../../../components/CourseList";
import { Container } from "@material-ui/core";

const HomePage = (props) => {
  useEffect(() => {
    props.fetchCourseList()
  }, [])

  const renderCourseList = (courseList) => {
    if (courseList) {
      let courseArr = []
      for (let key in courseList) {
        courseArr.push({
          ...courseList[key],
          id: key,
        })
      }
      return <CourseList data={courseArr} />
    } else {
      return <div>loading...</div>
    }
  }

  return (
    <div>
      <Container>
        {renderCourseList(props.data)}
      </Container>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.courseListReducer.loading,
    data: state.courseListReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCourseList: () => {
      dispatch(actFetchCourseList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);