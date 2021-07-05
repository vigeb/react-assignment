import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import slugify from 'slugify'
import axios from "axios";
import { exchangeRefreshToken } from '../../global/authModule'
import { useHistory } from 'react-router-dom'

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

  const history = useHistory()

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

  const [loading, setLoading] = useState(false)

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
    setLoading(true)
    e.preventDefault()

    const credentials = localStorage.getItem("credentials") && JSON.parse(localStorage.getItem("credentials"))

    if (!credentials.refreshToken) return

    let today = new Date();
    let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

    exchangeRefreshToken(credentials.refreshToken)
      .then((tokenData) => {
        if (updateMode) {
          return axios({
            url: `https://react-asignment-default-rtdb.asia-southeast1.firebasedatabase.app/categories/${categoryId}.json?auth=${tokenData.data.id_token}`,
            method: 'PUT',
            data: {
              ...category,
              updatedDate: date,
              uid: tokenData.data.user_id,
            },
          })
        } else {
          return axios({
            url: `https://react-asignment-default-rtdb.asia-southeast1.firebasedatabase.app/categories.json?auth=${tokenData.data.id_token}`,
            method: 'POST',
            data: {
              ...category,
              createdDate: date,
              uid: tokenData.data.user_id,
            },
          })
        }
      })
      .then((res) => {
        console.log('categ data', res.data)
        history.push('/admin/category-management')
      })
      .catch((err) => {
        setLoading(false)
        console.log('err', err)
      })
  }

  const renderSubmitButton = (isLoading) => {
    if (isLoading) {
      return (
        <Button className={classes.buttonSubmit} size="large" variant="contained" color="primary" type="submit" disabled>
          { updateMode ? 'Updating...' : 'Publishing...' }
        </Button>
      )
    }
    return (
      <Button className={classes.buttonSubmit} size="large" variant="contained" color="primary" type="submit">
        { updateMode ? 'UPDATE' : 'PUBLISH' }
      </Button>
    )
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
            label="Tên Danh Mục"
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

          {renderSubmitButton(loading)}
        </FormControl>
      </form>
    </div>
  )
}

export default FormManageCategory;