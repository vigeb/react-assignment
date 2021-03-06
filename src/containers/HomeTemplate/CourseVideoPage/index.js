import { Container } from "@material-ui/core"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    videoBackground: {
        background: theme.palette.common.black,
        width: '100%',
    },
    video: {
        width: "100%",
        height: 0,
        paddingBottom: '56.25%',
        position: 'relative',
    },
    youtubeVideo: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    inforSession: {
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        }
    },
    inforText: {
        color: "#3c3b37",
    },


}));
const VideoCoursePage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} >

            <Grid container spacing={0} align="center">

                <Grid item xs={12} sm={9}>

                    <Grid item xs={12} className={classes.videoBackground}>
                        <div className={classes.video}>
                            <iframe className={classes.youtubeVideo} src="https://www.youtube.com/embed/GJ8jidDdWVg" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        </div>
                    </Grid>

                    <Container maxWidth="sm" className={classes.inforSession}>
                        <Grid style={{ padding: 16 }}><Typography align="left" variant="h5" display="block" style={{ fontWeight: 'bold', paddingTop: 32, marginBottom: 16 }} >
                            About this course
                        </Typography>
                            <Typography align="left" display="block" className={classes.inforText} style={{ marginBottom: 16, }}>Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!</Typography>
                        </Grid>

                        <Box borderTop={1} borderColor="grey.300" >
                            <Grid container style={{ padding: 16 }}>
                                <Grid xs={4} align="left">
                                    <Typography className={classes.inforText}>By the numbers</Typography>
                                </Grid>
                                <Grid xs={4} align="left">
                                    <Typography className={classes.inforText}>Skill level: All Levels</Typography>
                                    <Typography className={classes.inforText}>Students: 410256</Typography>
                                    <Typography className={classes.inforText}>Languages: English</Typography>
                                </Grid>
                                <Grid xs={4} align="left"><Typography className={classes.inforText}>Lectures: 1</Typography><Typography className={classes.inforText}>Video: 12 minutes</Typography></Grid>

                            </Grid>
                        </Box>
                        <Box borderTop={1} borderColor="grey.300">
                            <Grid container style={{ padding: 16 }}>
                                <Grid xs={4} align="left">
                                    <Typography className={classes.inforText}>Description</Typography>
                                </Grid>
                                <Grid xs={8} align="left">
                                    <Typography className={classes.inforText}>????y l?? kh??a h???c fullstack.

                                        Sau khi h???c xong b???n s??? c?? th??? t??? l???p tr??nh ???????c nguy??n m???t c??i website.<br></br>

                                        Ki???n th???c b???n s??? ???????c h???c:

                                        ** Backend **

                                        - Mongodb
                                        - Express
                                        - Nodejs

                                        ** Frontend **

                                        - Angular
                                        <br></br>
                                        Ng?????i ta g???i n?? l?? mean l?? do vi???t t???t nh???ng ch??? c??i ?????u c???a Mongodb (M), Expressjs (E), Angular (A), Nodejs (N)

                                        Kh??a h???c n??y ???? ???????c b??? sung th??m m???t s??? ki???n th???c m???i.</Typography>

                                </Grid>

                            </Grid>
                        </Box>
                    </Container>


                </Grid>
                <Grid item xs={12} sm={3} style={{ display: 'block' }}>
                    <Box borderLeft={1} borderColor="grey.300" style={{ height: '100%' }}>
                        <Grid item xs={12} >

                            <Box borderBottom={1} borderColor="grey.300"><Grid align="left" style={{ margin: 16 }} >

                                <Typography style={{ fontWeight: 'bold' }}>Section 1: HTML & CSS</Typography>
                                <Link className={classes.courseItem}><Typography style={{ paddingTop: 8 }} className={classes.inforText}> 1. What is Front-end ?</Typography></Link>
                                <Link><Typography style={{ paddingTop: 8 }} className={classes.inforText}> 2. What is HTML and CSS ?</Typography></Link>
                            </Grid></Box>

                            <Box borderBottom={1} borderColor="grey.300"><Grid align="left" style={{ margin: 16 }} >

                                <Typography style={{ fontWeight: 'bold' }}>Section 1: HTML & CSS</Typography>
                                <Link><Typography style={{ paddingTop: 8 }} className={classes.inforText}> 1. What is Front-end ?</Typography></Link>
                                <Link><Typography style={{ paddingTop: 8 }} className={classes.inforText}> 2. What is HTML and CSS ?</Typography></Link>
                            </Grid></Box>
                            <Box borderBottom={1} borderColor="grey.300"><Grid align="left" style={{ margin: 16 }} >

                                <Typography style={{ fontWeight: 'bold' }}>Section 1: HTML & CSS</Typography>
                                <Link><Typography style={{ paddingTop: 8 }} className={classes.inforText}> 1. What is Front-end ?</Typography></Link>
                                <Link><Typography style={{ paddingTop: 8 }} className={classes.inforText}> 2. What is HTML and CSS ?</Typography></Link>
                            </Grid></Box>
                            <Box borderBottom={1} borderColor="grey.300"><Grid align="left" style={{ margin: 16 }} >

                                <Typography style={{ fontWeight: 'bold' }}>Section 1: HTML & CSS</Typography>
                                <Link><Typography style={{ paddingTop: 8 }} className={classes.inforText}> 1. What is Front-end ?</Typography></Link>
                                <Link><Typography style={{ paddingTop: 8 }} className={classes.inforText}> 2. What is HTML and CSS ?</Typography></Link>
                            </Grid></Box>

                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </div >
    )
}
export default VideoCoursePage