import React, { useEffect } from "react";
// import CourseList from "../../../components/CourseList"
import { actFetchCourseList } from "./modules/action";
import { connect } from "react-redux";

const HomePage = (props) => {
  useEffect(() => {
    props.fetchCourseList()
    console.log('p', props)
  }, [])
  return (<div>
    homepage
    {/* <CourseList /> */}
  </div>);
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