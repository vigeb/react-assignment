import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => (
    {
        root: {
            width: '100%'
        },
        media: {
            height: 0,
            paddingTop: '56.25%',
            backgroundColor: theme.palette.grey[300],
        },
        buttonPrice: {
            display: 'block',
            width: '100%',
        },
    }
));

export default function CourseListItem(props) {
    const classes = useStyles();
    console.log(props.item)

    const history = useHistory()
    const handleOnClick = (e) => {
        e.preventDefault()
        if (!localStorage.getItem("credentials")) {
            alert("Please sign in in order to buy courses!")
            history.push(`/login?slug=${props.item.slug}.${props.item.id}`)
        }

    }
    return (
        <Card className={classes.root}>

            <CardMedia
                className={classes.media}
                image={props.item.imageCover}
                title={props.item.courseName}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.item.courseName}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={handleOnClick} variant="contained" color="primary" className={classes.buttonPrice}>
                    {props.item.price} VND
                </Button>
            </CardActions>

        </Card>
    );
}