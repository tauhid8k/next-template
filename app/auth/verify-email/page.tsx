import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import VerifyEmailCodeForm from '@/components/auth/verify-email-form'
import ResendEmailButton from '@/components/auth/resend-email-button'

const VerifyEmailPage = () => {
  return (
    <Card className="w-full max-w-sm bg-white dark:bg-muted/40">
      <CardHeader className="text-center">
        <CardTitle>Verify Email</CardTitle>
        <CardDescription>
          We have sent you an email for verification. Please, verify the code
          here
        </CardDescription>
      </CardHeader>
      <CardContent>
        <VerifyEmailCodeForm />
        <ResendEmailButton />
      </CardContent>
    </Card>
  )
}

export default VerifyEmailPage
