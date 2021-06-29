import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '1rem',
  },
  formControl: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
}))

const AddNewCoursePage = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="tenKhoaHoc"
          label="Tên Khóa Học"
          name="tenKhoaHoc"
          autoComplete="tenKhoaHoc"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="biDanh"
          label="Bí Danh (slug)"
          name="biDanh"
          autoComplete="biDanh"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="moTa"
          label="Mô Tả"
          name="moTa"
          autoComplete="moTa"
          autoFocus
          multiline
          rows={6}
        />
        <Select
          labelId="danhMucKhoaHoc"
          id="danhMucKhoaHoc"
        >
          <MenuItem value={10}>Backend</MenuItem>
          <MenuItem value={20}>Frontend</MenuItem>
          <MenuItem value={30}>Fullstack</MenuItem>
        </Select>
        <FormHelperText>Hãy chọn danh mục khóa học</FormHelperText>
      </FormControl>
    </div>
  )
}

export default AddNewCoursePage;