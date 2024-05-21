// Handle Error Response From Backend API
export const handleErrors = (data: any) => {
  // Error response from API
  const errorResponse = data.response.data

  const validationErrors = []
  let formError = null
  let error = null

  if (errorResponse?.validationError) {
    const validationError = errorResponse.validationError
    validationErrors.push(...validationError)
  } else if (errorResponse?.formError) {
    formError = errorResponse.formError
  } else if (errorResponse?.errors?.length) {
    error = errorResponse.errors[0].message
  } else if (errorResponse?.message) {
    error = errorResponse.message
  } else {
    error = 'An unexpected error occurred'
  }

  return { validationErrors, formError, error }
}

// Handle Success Response From Backend API
export const handleSuccess = (data: any) => {
  // Success response from API
  const successResponse = data.data

  let formMessage = null
  let message = null

  if (successResponse?.message) {
    message = successResponse.message
  }

  if (successResponse?.formMessage) {
    formMessage = successResponse.formMessage
  }

  return { formMessage, message }
}
