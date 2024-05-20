// Handle Error Response From Backend API
export const handleErrors = (data: any) => {
  // Error response from API
  const errorResponse = data.response.data

  const formErrors = []
  let error = null

  if (errorResponse?.validationError) {
    const validationError = errorResponse.validationError
    formErrors.push(...validationError)
  } else if (errorResponse?.errors?.length) {
    error = errorResponse.errors[0].message
  } else if (errorResponse?.error) {
    error = errorResponse.error
  } else if (errorResponse?.message) {
    error = errorResponse.message
  } else {
    error = 'An unexpected error occurred'
  }

  return { formErrors, error }
}

// Handle Success Response From Backend API
export const handleSuccess = (data: any) => {
  let message = null
  message = data.data.message

  return { message }
}
