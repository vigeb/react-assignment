import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '0.5rem',
  },
  img: {
    width: '120px',
  },
})

const CourseHero = (props) => {
  const classes = useStyles()
  return (
    <>
      <Card className={classes.root}>
        <div className="">
          <img src={props.img} alt="" className={classes.img} />
        </div>
        <div className="">
          <h1>This is the title of the course</h1>
        </div>
      </Card>
    </>  
  )
}

export default CourseHero