import React, { useEffect } from "react";
import { actFetchCourseDetail } from "./modules/action"
import { connect } from "react-redux";
import CourseHero from "../../../components/CourseHero"

const CoursePage = (props) => {
  useEffect(() => {
    const { id } = props.match.params
    props.fetchCourseDetail(id)
  }, [])

  const renderCourseHero = () => {
    if (props.data) {
      return (
        <CourseHero
          data={props.data}
        />
      )
    } else {
      return 'loading ...'
    }
  }

  return (
    <>
      {renderCourseHero()}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.courseDetailReducer.loading,
    data: state.courseDetailReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCourseDetail: (id) => {
      dispatch(actFetchCourseDetail(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage)