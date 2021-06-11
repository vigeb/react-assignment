import { makeStyles } from "@material-ui/core"
import CourseHero from "../../../components/CourseHero"

const useStyles = makeStyles({
  p: {
    padding: '2rem',
  }
})

const CoursePage = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.p}>
        <CourseHero img="https://elearning0706.cybersoft.edu.vn/hinhanh/bootcamp-react-0112.png" />
      </div>
    </>
  )
}

export default CoursePage