'use client'

import { LoaderCircle } from 'lucide-react'

const ResendEmailButton = () => {
  const handleResendEmail = () => {}

  return (
    <div className="w-full text-center">
      <button
        onClick={handleResendEmail}
        className="text-sm text-muted-foreground hover:underline focus:underline focus:outline-none cursor-pointer"
      >
        {/* Did not receive any code? */}
        <div className="flex items-center gap-1.5">
          <LoaderCircle className="size-4 animate-spin" />
          <span>Resending email</span>
        </div>
      </button>
    </div>
  )
}

export default ResendEmailButton
