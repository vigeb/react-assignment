import React, { useEffect } from "react";
// import CourseList from "../../../components/CourseList"
import { actFetchCourseList } from "./modules/action";
import { connect } from "react-redux";
import CourseList from "../../../components/CourseList";
import { Container } from "@material-ui/core";

const HomePage = (props) => {
  useEffect(() => {
    props.fetchCourseList()
    console.log('p', props)
  }, [])
  console.log(props.data)
  return (<div>
    <Container>

      <CourseList data={props.data} />
    </Container>

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