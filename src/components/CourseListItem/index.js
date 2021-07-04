import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,

    },
});

export default function CourseListItem(props) {
    const classes = useStyles();
    console.log(props.item)



    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.item.imageCover}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.item.courseName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        giá: {props.item.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={`/detail/${props.item.id}`}>
                    <Button size="small" color="primary">
                        Know more
                    </Button>
                </Link>
                <Link
                // to={`/detail/${props.item.id}`}
                >
                    <Button size="small" color="primary">
                        Buy Course
                    </Button>
                </Link>
            </CardActions>

        </Card>
    );
}