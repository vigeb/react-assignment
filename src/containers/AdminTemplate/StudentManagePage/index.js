import { FormControl, Grid, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import StudentManageItem from "../../../components/StudentManageItem";
import { useState } from "react";

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

    const studentList = [
        {
            "taiKhoan": "123112",
            "biDanh": null,
            "hoTen": "124124"
        },
        {
            "taiKhoan": "123132",
            "biDanh": null,
            "hoTen": "zero"
        },
        {
            "taiKhoan": "12chamlenluon",
            "biDanh": null,
            "hoTen": "123"
        },
        {
            "taiKhoan": "7chamlalenduong",
            "biDanh": null,
            "hoTen": "chamlalenduong"
        },
        {
            "taiKhoan": "aaa1",
            "biDanh": null,
            "hoTen": "admin1"
        },
        {
            "taiKhoan": "aasd",
            "biDanh": null,
            "hoTen": "asdsa"
        }
    ]
    const renderStudentList = () => {
        // const studentList = props.data
        if (studentList && studentList.length) {
            return studentList.map((item, index) => {
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
                'display all'
                :
                'sort by maKhoaHoc'
                // <> 
                // <FormControl variant="filled" className={classes.formControl}>
                //     <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
                //     <NativeSelect

                //         // value={maNhom}
                //         onChange={handleChange}
                //         defaultValue="Angular"
                //     >
                //         <option
                //             //  aria-label="None"
                //             value="Angular" onChange={handleChange}>Angular</option>
                //         {/* {maNhomArr.map((maNhom) => (
                //     <option onChange={handleChange} value={maNhom}>{maNhom}</option>
                // ))} */}

                //     </NativeSelect>
                // </FormControl>
                //     <Grid container spacing={2}>
                //         {renderStudentList()}
                //     </Grid>
                //     </>
            }

        </>
    )
}
export default StudentManagePage