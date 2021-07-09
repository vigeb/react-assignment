export default function validation(course) {
  let errors = {}

  const testSlug = (str) => {
    const patt = new RegExp(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    return patt.test(str)
  }

  const testPrice = (str) => {
    const patt = new RegExp('^[0-9]+$')
    return patt.test(str)
  }

  if (!course.courseName || (course.courseName.length > 100)) {
    console.log('l', course.courseName.length)
      errors.courseName = "CourseName is required and must not exceed 100 letters"
  }

  if (!course.slug || !testSlug(course.slug)) {
    errors.slug = 'Slug is invalid'
  }

  if (!course.imageCover) {
    errors.imageCover = 'Image url is required'
  }

  if (!course.price || !testPrice(course.price)) {
    errors.price = 'Price is required and must contain only numbers'
  }

  if (!course.category) {
    errors.category = 'You must select a category'
  }

  if (!course.description || (course.description.length < 150)) {
    errors.description = 'The description is too short'
  }

  return errors
}
