// Handle Error Response From Backend API
export const handleErrors = (data: any) => {
  // Error response from API
  const response = data.response.data

  const validationErrors = []
  let formError = null
  let error = null

  if (response?.validationError) {
    const validationError = response.validationError
    validationErrors.push(...validationError)
  } else if (response?.formError) {
    formError = response.formError
  } else if (response?.errors?.length) {
    error = response.errors[0].message
  } else if (response?.message) {
    error = response.message
  } else {
    error = "An unexpected error occurred"
  }

  return { validationErrors, formError, error }
}

// Handle Success Response From Backend API
export const handleSuccess = (data: any) => {
  // Success response from API
  const response = data.data

  let formMessage = null
  let message = null

  if (response?.message) {
    message = response.message
  }

  if (response?.formMessage) {
    formMessage = response.formMessage
  }

  return { formMessage, message }
}
