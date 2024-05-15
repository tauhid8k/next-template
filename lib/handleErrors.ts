export const handleErrors = (response: any) => {
  // Clear existing errors
  const formErrors = []
  let errorAlert = null
  let successAlert = null

  if (response?.validationError) {
    const validationError = response.validationError
    formErrors.push(...validationError)
  } else if (response?.errors?.length) {
    errorAlert = response.errors[0].message
  } else if (response?.message) {
    successAlert = response.message
  } else {
    errorAlert = 'An unexpected error occurred'
  }

  return { errorAlert, successAlert, formErrors }
}
