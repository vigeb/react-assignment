import { FormControl, Grid, Typography } from "@material-ui/core"

const StudentManageItem = (props) => {
    return (
        <>
            <Typography>this is student {props.student.hoTen}</Typography>
        </>
    )
}
export default StudentManageItem