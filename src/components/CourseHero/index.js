import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '0.5rem',
  },
  // ratioMedia: {
  //   width: '100%',
  //   paddingBottom: '56.25%',
  //   position: 'relative',
  //   background: '#000',
  // },
  // media: {
  //   width: '100%',
  //   height: '100%',
  //   objectFit: 'cover',
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   opacity: '0.1',
  // },
})

const CourseHero = (props) => {
  const classes = useStyles()
  return (
    <>
      <Card className={classes.root}>
        {/* <div className={classes.ratioMedia}>
          <CardMedia
            className={classes.media}
            image={props.img}
            title={props.title}
          />
        </div> */}
        <Typography></Typography>
      </Card>
    </>  
  )
}

export default CourseHero