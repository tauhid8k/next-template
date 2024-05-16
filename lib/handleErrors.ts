export const handleErrors = (response: any) => {
  // Clear existing errors
  const formErrors = []
  let error = null
  let success = null

  if (response?.validationError) {
    const validationError = response.validationError
    formErrors.push(...validationError)
  } else if (response?.errors?.length) {
    error = response.errors[0].message
  } else if (response?.error) {
    error = response.error
  } else if (response?.message) {
    error = response.message
  } else if (response?.success) {
    success = response.success
  } else {
    error = 'An unexpected error occurred'
  }

  return { error, success, formErrors }
}
