import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { exchangeRefreshToken } from '../../global/authModule'
import axios from 'axios';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => (
    {
        root: {
            width: '100%'
        },
        media: {
            height: 0,
            paddingTop: '56.25%',
        },
        buttonPrice: {
            display: 'block',
            width: '100%',
        },
        skeletonButton: {
            width: '100%',
            padding: theme.spacing(3),
        },
        courseNameItem: {
            height: '6rem'
        }
    }
));

export default function CourseListItem(props) {
    const classes = useStyles();

    const [loading, setLoading] = useState(false)

    const history = useHistory()
    const handleOnClick = (e) => {
        setLoading(true)
        e.preventDefault()
        const credentials = localStorage.getItem("credentials") && JSON.parse(localStorage.getItem("credentials"))

        if (credentials && credentials.refreshToken) {
            const { email, displayName, refreshToken } = credentials

            exchangeRefreshToken(refreshToken)
                .then((token) => {
                    const { id_token, user_id } = token.data
                    const { id, courseName, price } = props.item
                    const enrollmentId = new Date().getTime() + ''
                    // console.log('token', token.data)
                    console.log('test', {
                        uid: user_id,
                        email,
                        displayName,
                        courseId: id,
                        courseName,
                        price,
                        status: 'pending',
                    })
                    return axios({
                        url: `https://react-asignment-default-rtdb.asia-southeast1.firebasedatabase.app/enrollment/${enrollmentId}.json?auth=${id_token}`,
                        method: 'PUT',
                        data: {
                            uid: user_id,
                            email,
                            displayName,
                            courseId: id,
                            courseName,
                            price,
                            status: 'pending',
                        },
                    })
                })
                .then((res) => {
                    setLoading(false)
                })
                .catch((err) => {
                    setLoading(false)
                    console.log('err', err)
                })
        } else {
            alert("Please sign in in order to buy courses!")
            history.push(`/login?slug=${props.item.slug}.${props.item.id}`)
        }

    }
    console.log(props.inDetailPage)
    return (
        <Card className={classes.root}>

            <CardMedia
                className={classes.media}
                image={props.item.imageCover}
                title={props.item.courseName}
            />
            <CardContent>

                <Typography className={classes.courseNameItem} gutterBottom variant="h5" component="h2">
                    {props.item.courseName}
                </Typography>
            </CardContent>
            <CardActions>
                {loading ?
                    <Skeleton variant="rect" className={classes.skeletonButton} text="loading..." />
                    :
                    <Button onClick={handleOnClick} variant="contained" color="primary" className={classes.buttonPrice}>
                        {props.item.price} VND
                    </Button>
                }
            </CardActions>

        </Card>
    );
}