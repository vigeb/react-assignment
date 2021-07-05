import { FormControl, Grid, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import StudentManageItem from "../../../components/StudentManageItem";
import { useState, useEffect } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'center',
        marginBottom: theme.spacing(2),
        textTransform: 'uppercase',
    },
}))
const StudentManagePage = () => {
    const classes = useStyles()

    const [listSortType, setListSortType] = useState("displayAll")
    const handleChangeSort = (e) => {
        setListSortType(e.target.value)
    }
    const handleChange = () => { }


    const [userList, setUserList] = useState([

        // {
        //     "taiKhoan": "aasd",
        //     "biDanh": null,
        //     "hoTen": "asdsa"
        // }
    ])

    const idToken = JSON.parse(localStorage.getItem("credentials")).idToken

    useEffect(() => {
        axios({
            url: `https://react-asignment-default-rtdb.asia-southeast1.firebasedatabase.app/users.json?auth=${idToken}`,
            method: "GET",
        }).then((res) => {
            // console.log(res.data)
            let allUserData = res.data
            let allUser = []
            for (let key in allUserData) {
                allUser.unshift({
                    ...allUserData[key],
                    id: key,
                })
            }
            setUserList(allUser)
            console.log(userList, allUser)

        })
            .catch((err) => { console.log(err) })
    }, [])
    console.log(userList)
    const renderStudentList = () => {
        // const studentList = props.data
        if (userList && userList.length) {
            return userList.map((item, index) => {
                if (item.typeOfUser === "HV")
                    return (
                        <Grid item xs={12} key={item.maKhoaHoc}>

                            <StudentManageItem student={item} key={index} />
                        </Grid>
                    )
            })
        } else {
            return <div>loading...</div>
        }
    }
    return (
        <>
            <Typography variant="h4" component="h2" className={classes.title}>Student Management</Typography>
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel htmlFor="filled-age-native-simple">Hiện danh sách theo</InputLabel>
                <NativeSelect

                    // value={maNhom}
                    onChange={handleChangeSort}
                    defaultValue="Angular"
                >
                    <option
                        //  aria-label="None"
                        value="displayAll" onChange={handleChange}>Tất cả học viên</option>
                    <option
                        //  aria-label="None"
                        value="sortByCourseId" onChange={handleChange}>Danh sách theo mã khóa học</option>

                </NativeSelect>
            </FormControl>
            {listSortType === 'displayAll' ?
                <>
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
                        <NativeSelect

                            // value={maNhom}
                            onChange={handleChange}
                            defaultValue="Angular"
                        >
                            <option
                                //  aria-label="None"
                                value="Angular" onChange={handleChange}>Angular</option>
                            {/* {maNhomArr.map((maNhom) => (
                    <option onChange={handleChange} value={maNhom}>{maNhom}</option>
                ))} */}

                        </NativeSelect>
                    </FormControl>
                    <Grid container spacing={2}>
                        {renderStudentList()}
                    </Grid>
                </>
                :
                'sort by maKhoaHoc'

            }

        </>
    )
}
export default StudentManagePage