import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import GroupIcon from '@material-ui/icons/Group';

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '0.5rem',
  },
  // cardLayout: {
  //   alignItems: 'center',
  // },
  cardMedia: {
    width: '100%',
    height: '150px',
    background: 'red',
  },
  cardHeading: {
    fontSize: '1.5rem',
    fontWeight: '600',
  },
})

const CourseHero = (props) => {
  const classes = useStyles()
  return (
    <>
      <Card className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <CardMedia
              className={classes.cardMedia}
              image={props.data.hinhAnh}
              title={props.data.tenKhoaHoc}
            />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography component="h1" align="left" className={classes.cardHeading}>{props.data.tenKhoaHoc}</Typography>
            <Typography component="p" align="left">{props.data.danhMucKhoaHoc.tenDanhMucKhoaHoc}</Typography>
            <Typography component="p">
              <GroupIcon /> {props.data.soLuongHocVien} students
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </>  
  )
}

export default CourseHero