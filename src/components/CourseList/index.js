import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CourseListItem from './../CourseListItem'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

}));

function CourseList(props) {
    const classes = useStyles();
    console.log(props.data)
    const maNhomArr = [
        'GP02', 'GP03', 'GP04', 'GP05', 'GP06', 'GP07', 'GP08', 'GP09', 'GP10',
    ];
    const [state, setState] = useState(
        "GP01"
    )
    const handleOnChange = (e) => {
        setState(
            e.target.value
        )

    }
    props.onGetMaNhom(state)

    if (!props.loading && props.data) {
        return (
            <div div className={classes.root} >

                <Box p={3}><Typography align="center" variant="h2" display="block" >Danh sách khóa học</Typography></Box>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel fullWidth id="demo-simple-select-outlined-label">Mã nhóm</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"

                        label="Mã nhóm"
                        onChange={handleOnChange}
                        name="maNhom"
                        defaultValue="GP01"
                        value={state}
                    >
                        <MenuItem key="GP01"
                            value="GP01"
                            onChange={handleOnChange}
                        >GP01</MenuItem>
                        {maNhomArr.map((maNhom) => (
                            <MenuItem key={maNhom}
                                value={maNhom}
                                onChange={handleOnChange}
                            >{maNhom}</MenuItem>
                        ))}

                    </Select>
                </FormControl>
                <Grid container spacing={3}>
                    {props.data.map((item, index) => (
                        <Grid item xs={3}>
                            <CourseListItem item={item} index={index} />
                        </Grid>
                    ))}

                </Grid>
            </div >
        );
    } else return (<div class="loader"></div>)

}

export default CourseList