import React, { useState } from "react";
import { connect } from 'react-redux'
import { actSubmitCategory } from './modules/action'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import slugify from 'slugify'

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
  buttonSubmit: {
    marginTop: '1.5rem',
  },
  title: {
    fontSize: '2rem',
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: '2rem',
  },
}))

const FormManageCategory = (props) => {
  const classes = useStyles()
  const { updateMode, categoryDetail, categoryId } = props
  const [category, setCategory] = useState({
    ...categoryDetail || {
      name: '',
      slug: '',
      createdBy: '',
      createdDate: '',
      updatedDate: '',
      description: '',
    }
  })

  const handleCategoryName = (e) => {
    if (updateMode) {
      setCategory({
        ...category,
        name: e.target.value.trim(),
      })
    } else {
      const slug = slugify(e.target.value, {
        replacement: '-',
        remove: undefined,
        lower: false,
        strict: false,
        locale: 'vi'
      })

      setCategory({
        ...category,
        name: e.target.value.trim(),
        slug,
      })
    }
  }

  const handleCategoryInfo = (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    props.submitCategory(category, updateMode, categoryId)
  }

  return (
    <div className={classes.root}>
      <Typography variant="h1" component="h1" className={classes.title}>{updateMode ? 'Update Category' : 'Add New Category'}</Typography>
      <form onSubmit={handleOnSubmit}>
        <FormControl className={classes.formControl}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Tên Khóa Học"
            name="name"
            autoComplete="name"
            value={category.name}
            autoFocus
            onBlur={handleCategoryName}
            onChange={handleCategoryInfo}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="slug"
            label="Slug"
            name="slug"
            value={category.slug}
            autoComplete="slug"
            onChange={handleCategoryInfo}
          />            

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="description"
            label="Mô Tả"
            name="description"
            autoComplete="description"
            value={category.description}
            multiline
            rows={6}
            onChange={handleCategoryInfo}
          />

          <Button className={classes.buttonSubmit} size="large" variant="contained" color="primary" type="submit">
            { updateMode ? 'UPDATE' : 'PUBLISH' }
          </Button>
        </FormControl>
      </form>
    </div>
  )
}

const setDispatchToProps = (dispatch) => {
  return {
    submitCategory: (category, updateMode, id) => {
      dispatch(actSubmitCategory(category, updateMode, id))
    }
  }
}

export default connect(null, setDispatchToProps)(FormManageCategory);