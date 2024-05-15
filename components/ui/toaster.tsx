import { Toaster } from 'react-hot-toast'

export const ToastContainer = () => (
  <Toaster
    position="bottom-right"
    toastOptions={{
      error: {
        className: 'bg-white dark:bg-gray-800',
        style: {
          color: '#f87171',
        },
      },
      success: {
        className:
          'bg-white dark:bg-gray-800 text-emerald-400 dark:text-emerald-400',
        style: {
          color: '#10b981',
        },
        iconTheme: {
          primary: '#059669',
          secondary: '#fff',
        },
      },
    }}
  />
)
